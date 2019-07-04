const axios = require('axios');

export const homeView = new Vue({
        el: '#mainPage',
        data:{
            isHeader:true,
            editorDom:null,
            markdownContent:'Enter Content here...',
            htmlContent:null,
            titleHeader:'Enter Title Here...'
        },
        methods: {
            init:function() {
                const textDom = this.editorDom.querySelector('textarea');                  
                textDom.style.width = `${this.editorDom.clientWidth}px`;
                textDom.style.height = `${this.editorDom.clientHeight-10}px`;
                textDom.style.background = `#36312c`;
                textDom.style.color = `#ebd1b7`;
            },
            changeHeaderToText:function(evt) {
                this.isHeader = !this.isHeader;
            },
            convertMarkdown: function() {                

                const requestBody = new URLSearchParams();
                const config = {
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded'
                    }
                  }
                requestBody.append('content', this.markdownContent);
                // console.log('Payload is: ', requestBody);
                axios.post('/convert', requestBody, config)
                .then((result)=>{
                    // console.log('Result is: ', result.data);                    
                    this.htmlContent = result.data.markdown ? result.data.markdown: '<div>&nbsp;</div>';                    
                })
                .catch((err)=>{
                    console.log('Error calling /convert', err);
                });
            }
        },
        mounted: function() {
            const dom = document.querySelector('#mainPage');
            this.editorDom = document.querySelector('#editorContainer');             
            if (dom) this.init();
        },
        updated: function() {
            const markdownDom = document.querySelector('.markdown-render');            
            markdownDom.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightBlock(block);
              });
        }
});