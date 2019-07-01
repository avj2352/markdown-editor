export const loginView = new Vue({
        el: '#loginPage',
        data:{
            hello:`Hello this is the login page`
        },
        methods:{
            init:function() {
                alert('Login Page');
            }
        },
        created: function() {
            const dom = document.querySelector('#loginPage');
            if(dom) this.init();
        }
});