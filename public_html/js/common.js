var data = {
    product: {
        name: 'iPhone 8',
        img: [
            'img/plugin/iphone_5_now_tmobile.jpg',
            'img/plugin/397615379_640.jpg',
            'img/plugin/iphone-5c-plastic-1024x465.png'
        ],
        features: [
            'With iOS8',
            'Elegant',
            'Reactive'
        ],
        price: 999.90,
        productLink: 'http://www.apple.com/fr/iphone-7/?afid=p238%7Cs05EVyND6-dc_mtid_187079nc38483_pcrid_165684031121_&cid=aos-fr-kwgo-brand-h17-slid-JatTnnws-product-'

    },
    carousel: {
        dots: true
    }
};

$('#plugin').advertize(data);
$('#plugin').draggable({
    //axis: 'x',
    //containment : '#divMax',
    //cursor:'move',
    revert:'invalid'
});

$('#drop').droppable({
    accept: '#plugin'
});
