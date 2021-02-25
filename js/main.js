$(window).scroll(() => {
        configureAnimation('section.benefits .section_title', 'fadeInDown');
        configureAnimation('section.benefits .result', 'fadeInUp');
        configureAnimation('section.future .section_title', 'fadeInDown');

        configureAnimation('section.future .data-name', 'fadeInLeft');
        configureAnimation('section.future .data-email', 'fadeInRight');
        configureAnimation('section.future .data-phone', 'fadeInLeft');
        configureAnimation('section.future .data-flight', 'fadeInRight');
        configureAnimation('section.future button', 'fadeInUp');
    }
);

const configureAnimation = (selector, effect) => {
    $(selector).each(function () {
        let imagePos = $(this).offset().top;

        let topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 650) {
            $(this).addClass(effect);
        }
    });
}