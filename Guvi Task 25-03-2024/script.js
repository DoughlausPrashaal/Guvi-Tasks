setTimeout(function() {
    document.querySelector('#countdown').innerHTML = "10";
    setTimeout(function(){
        document.querySelector('#countdown').innerHTML = "9";
        setTimeout(function(){
            document.querySelector('#countdown').innerHTML = "8";
            setTimeout(function(){
                document.querySelector('#countdown').innerHTML = "7";
                setTimeout(function(){
                    document.querySelector('#countdown').innerHTML = "6";
                    setTimeout(function(){
                        document.querySelector('#countdown').innerHTML = "5";
                        setTimeout(function(){
                            document.querySelector('#countdown').innerHTML = "4";
                            setTimeout(function(){
                                document.querySelector('#countdown').innerHTML = "3";
                                setTimeout(function(){
                                    document.querySelector('#countdown').innerHTML = "2";
                                    setTimeout(function(){
                                        document.querySelector('#countdown').innerHTML = "1";
                                        setTimeout(function(){
                                            document.querySelector('#countdown').innerHTML = "Happy Independance Day";
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000);