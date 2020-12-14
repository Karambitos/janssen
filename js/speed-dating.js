
   const submitBtn = document.querySelector('button.btn')
    if(submitBtn){
     $('.custom-checkbox').click(function(){
       if($(this).attr('checked') == false){
         submitBtn.classList.add('disabled')
       }
       else {
         submitBtn.classList.remove('disabled')
       }
     });
     $('button.btn').click(function(){
        $('.container-checkbox').fadeOut(200);
        $('.block-text.container').fadeOut(200);
        $('.container-video-player').delay(200).fadeIn('slow');
        $('.container.container-text').delay(200).fadeIn('slow');
        $('.block-icons-space').delay(200).fadeIn('slow');
        $(window).scrollTop(0);
     });
};


