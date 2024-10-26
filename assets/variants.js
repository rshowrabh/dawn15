$(document).ready(function(){
    // if variation is select value 
    $('.single_selector').on('change',function(){            
        let variantName = '';
        $('.single_selector').each(function(e){
            variantName += e != 0 ? '-' : '';
            variantName += $(this).val();
           
        });
        
        $('#productSelect option').each(function(){
            var txt = $.trim($(this).text());
            if(txt == variantName ){
                $(this).parent().val($(this).val());
                var id = $(this).val();
                var price = $(this).data('price');
                var compare_price = $(this).data('compare');
                var available = $(this).data('available');

                $('#product_id').val(id);
                if( available == true) {
                    $('.product-btn').removeClass('sold_out').text('Add to cart');
                } else {
                    $('.product-btn').addClass('sold_out').text('Sold Out');
                }
            }   
        })  
    });

     // if variation is radio value 
    $('.option_input').on('change', function(){
        let optionName = '';
        $('input:radio.option_input:checked').each(function(e){
            optionName += e != 0 ? '-' : '';
            optionName += $(this).val();
        });

        $('#productSelect option').each(function(){
            var txt = $.trim($(this).text());
            if(txt == optionName ){
                $(this).parent().val($(this).val());
                var id = $(this).val();
                var price = $(this).data('price');
                var price2 = $(this).data('price2');
                var compare_price = $(this).data('compare');
                var available = $(this).data('available');
                $('.price-item').html(price2);

                $('#product_id').val(id);
                if( available == true) {
                    $('.product-btn').removeClass('sold_out').text('Add to my bag');
                } else {
                    $('.product-btn').addClass('sold_out').text('Sold Out');
                }
            }  
        })  
    });

    // quantity selector 
    $('.product-qty-plus').on('click', function(){
        var qty = parseInt($(this).prev().val());
        qty += 1;
        $('#product_qty').val(qty);
        $(this).prev().val(qty);
    })

    $('.product-qty-minus').on('click', function(){
        var qty = parseInt($(this).next().val());
        if(qty > 1) {
            qty -= 1;
            $('#product_qty').val(qty);
            $(this).next().val(qty);
        }
    })

    $('.product-input-qty').on('keyup', function(){
        var qty = parseInt($(this).val());
        if(qty > 1) {
            $('#product_qty').val(qty);
        }
    })

    // add to cart 

    $('.addToCart').on('click', function(e){
        e.preventDefault();

        $.ajax({
            type:'POST',
            url:'/cart/add.js',
            data:$('#product_form').serialize(),
            dataType:'json',
            success:function(data) {
                // console.log(data);
                $('body').addClass('cartshown');
                cart_item_update();

            },
            error:function(err) {
                console.log('Error')
            }
        })
    })
})

function cart_item_update() {
    fetch('/?section_id=cart-drawer')
        .then(reponse => reponse.text())
        .then(cartData => {
            var cart_html = $(cartData);
            var cart_items = $('.cart-drawer-items', cart_html);
            var cart_footer = $('.cart-footer-content', cart_html);
            var cart_progress = $('.cart-progress', cart_html);
            $('.cart-drawer-items').replaceWith(cart_items);
            $('.cart-footer-content').replaceWith(cart_footer);
            $('.cart-progress').replaceWith(cart_progress);
    });

    $.getJSON('/cart.js', function(cart){
        var total_items = cart.item_count;
        $('.cart-count-bubble span').text(total_items);
    })
}