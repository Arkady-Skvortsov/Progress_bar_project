const progress = document.querySelector('.progress-bar');
    	const scroll_block = document.querySelector('.scroll-block');

    	window.addEventListener('scroll', Scrollbar);

    	function Scrollbar() {
    	   let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
           let windowHeight = document.documentElement.scrollHeight || document.documentElement.clientHeight;
           console.log(windowScroll);

           let prog = windowScroll / windowHeight * 100;

           if(windowScroll >= 3000) {
           	  scroll_block.classList.add('s');
           } else {
              scroll_block.classList.remove('s');
           }
           
           progress.style.width = `${prog}%`;
    	}
        
        scroll_block.addEventListener('click', GO);

        function GO() {
           let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);

           if(top > 0) {
              window.scrollBy(0, -12500);
           }
        }