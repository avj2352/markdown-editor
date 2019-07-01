export const homeView = new Vue({
        el: '#mainPage',
        data:{
            hello:`Hello There from Vue!`,
            editorDom:null
        },
        methods: {
            init:function() {
                const textDom = this.editorDom.querySelector('textarea');
                textDom.value = `Enter Content Here....`;                
                textDom.style.width = `${this.editorDom.clientWidth}px`;
                textDom.style.height = `${this.editorDom.clientHeight-12}px`;
                textDom.style.background = `#36312c`;
                textDom.style.color = `#ebd1b7`;
            }
        },
        mounted: function() {
            const dom = document.querySelector('#mainPage');
            this.editorDom = document.querySelector('#editorContainer');             
            if (dom) this.init();
        }
});