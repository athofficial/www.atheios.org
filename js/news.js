$(function () {
  var $content = $('#medium-content');
  var data = {
    rss_url: 'https://medium.com/feed/@atheiosteam'
  };
  $.get('https://api.rss2json.com/v1/api.json', data, function (response) {
    if (response.status == 'ok') {
      var output = '';
      $.each(response.items, function (k, item) {
        output += '<li class="wow fadeIn" data-wow-duration="1.2s">';
        output += '<div class="medium-blog-post" onclick="window.open(\'' + item.guid + '\',\'mywindow\');">'
        output += '<div class="inner_list">';
        output += '<div class="image_wrap">';
        output += '<img class="small" src="' +item.thumbnail+ '"alt="">';
        output += '<a class="link_news" href="index.html"></a>';
        output += '</div>';
        output += '<div class="definitions_wrap">';
        output += '<div class="title_holder">';
        output += '<span class="medium_title">' + item.title + '</span>';
        output += '</div>';
        output += '<div class="date_wrap">';
        output += '<p>' + $.format.date(item.pubDate, "MMM dd, yyyy") + '<a href="index.html">Update</a></p>';
        output += '</div>';
        output += '<div class="read_more">';
        output += '<a href="'+ item.link +'"><span>Read More</span></a>';
        output += '</div>';
        output += '</div>';
        output += '</div>';
        output += '</li>';
        //console.log(item);
        return k < 3;
      });
      $content.html(output).hide();
      $content.fadeIn('slow');
    }
  });
});