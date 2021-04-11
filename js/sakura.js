$('.initial_hidden').each(function(i) {
var $fader = $(this);
setTimeout(function() {$fader.addClass('fade_this_in');}, i*50+450);
setTimeout(function() {$fader.addClass('gray_link');}, i*50+1200);
});
$('#spikeyarea').mouseover(function(e) {$('#spikeydiv').toggleClass('spikeyhighlight');});
$('#spikeyarea').mouseout(function(e) {$('#spikeydiv').toggleClass('spikeyhighlight');});