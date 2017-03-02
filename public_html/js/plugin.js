(function ($) {
    $.extend($.fn, {

        // fonction publique à appeler sur un élément jQuery
        advertize: function (options) {

            // L'objet {} peut contenir des options par défaut, sinon ça sert à rien (comme là)
            var settings = $.extend({},options);
            var carousel = this;

            // fonction privée : permet de décomposer le code du plugin
            function createSlides(params) {
                var slide, img, feature, link, btn;
                // Si les données fournissent des images et si en plus, il y a des caractéristiques
                if(settings.product.img !== null && settings.product.img.length >0){
                    for(var i=0; i<settings.product.img.length; i++){

                        //création de la slide
                        slide = $('<div>',{id:"slide",'class' : 'slide'});

                        //ajout d'une image
                        img = $('<img>', {'src':settings.product.img[i]});
                        slide.append(img);

                        //ajout des caractéristiques
                        if(settings.product.features[i] !== null && settings.product.features[i] !== undefined)
                        feature = $('<span>', {'html': settings.product.features[i]});
                        slide.append(feature);

                        //ajout de la slide au carousel retourné
                        carousel.append(slide);
                    }
                }
                    // Si le nom, le prix et l'url de la page produit sont fournis, on affiche dans la dernière slide une page avec un bouton-lien vers la page produit
                    if (settings.product.name && settings.product.productLink && settings.product.price){
                        
                        //creation de la derniere slide
                        slide = $('<div>',{'class' : 'slide get_now'});
                        feature = $('<p>',{'text' :settings.product.name,'class':'text'});
                        //creation du lien
                        link = $('<a>', {'href':settings.product.productLink});
                        btn = $('<button>', {'text': 'Get it now! ' + settings.product.price + '€'});
                        link.append(btn);
                        
                        slide.append(feature);
                        slide.append(link);
                        //ajout de la dernière slide au carousel
                        carousel.append(slide);
                    }
            }

            // Dans le corps de la fonction privée, on ne fait qu'appeler les méthodes privées
            createSlides(settings);
            // Et on transforme notre objet en carousel avec les options carousel
            carousel.slick(settings.carousel);

        }

    });
})(jQuery);