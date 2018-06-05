<?php

define('ENV_HTTP', 'localhost.sammietaylor.com');
define('ROOT_CD', getcwd());

function imageSize($c, $dim) {
    if ( (strpos($c, 'http')===0 || strpos($c, '//')===0) && strpos($c, ENV_HTTP) == false) return $c; // external file, like youtube
    else if (strpos($c, ENV_HTTP) > -1){
      $c = substr($c, strlen(ENV_HTTP));
    }

    preg_match('/_(\d{1,4})x(\d{1,4})/i', $c, $match); // check if any ##x## suffix is in string.
    if (!empty($match)) {
      $img = preg_replace("/".$match[0]."/", '_' . $dim, $c); // just add it
      if (file_exists(ROOT_CD . $img)) return $img; // check if exists
    }

    $ext = preg_replace('/^.*\./', '', $c);
    $img = preg_replace("/\.".$ext."/", '_' . $dim . "." .$ext, $c);
    if (file_exists(ROOT_CD . $img)) return $img;

    $original = ROOT_CD . $c;
    if (!file_exists($original)) $original = ROOT_CD . $c;
    if (!file_exists($original)) {
      die($original);
      return $c; // this will 404!
    }
    return $c;
}


function dirToJson($dirname) {
  $all_files = glob($dirname."/*.*");
  $segment = substr($dirname, strripos($dirname, '/')+1);
  $images = array();
  $sizes = array('900', '600', '300', '70');
  for ($i=0; $i<count($all_files); $i++){
    $image_name = $all_files[$i];
    $ext = strtolower(pathinfo($image_name, PATHINFO_EXTENSION));
    if (!in_array($ext, array('gif','jpg','jpeg','png'))) {
      continue;
    }

    $safename = preg_replace('/\s/', '', $image_name);
    if( $safename != $image_name) {
      die("illlegal filename");
      rename($image_name, $safename);
      $image_name = $safename;
    }

    preg_match('/_(\d{1,4})x(\d{1,4})/i', $image_name, $match); // check if any _##x## suffix is in string.
    if (!empty($match)) {
      continue;
    }

    $image = array('useForDemo'=>true,'srcset'=>array(),'alt'=> $segment,
    'sizes'=>array(
      '(max-width: 400px) 50vw',
      '(max-width: 600px) 33.3vw',
      '(max-width: 900px) 25vw',
      '18vw'
    ));
    if ($i==0) $image['sizes']=array('90vw');

    foreach($sizes as $index=>$size){
      if($index==0) {
        $image['src']= imageSize('/'.$image_name, $size.'x'.$size);
        $data = getimagesize(ROOT_CD .$image['src']);
        $image['width'] = $data[0];
        $image['height'] = $data[1];
      } elseif ($index == count($sizes) -1) {
        $image['thumbnail'] = imageSize('/'.$image_name, $size.'x'.$size);
      }
      $image['srcset'][] = imageSize('/'.$image_name, $size.'x'.$size) . ' ' . $size . 'w';
    }

    if (stripos($image_name, 'IMG_20141028_180527') > -1 ||
        stripos($image_name, 'mastersuite/31') > -1) {
      array_unshift($images, $image);
    } else {
      $images[] = $image;
    }

  }
  return json_encode($images);
}
/*
{
  src: '/wwwroot/photos/lanai/28.jpg',
  srcset: [
    '/wwwroot/photos/lanai/28_1024.jpg 1024w',
    '/wwwroot/photos/lanai/28_800.jpg 800w',
    '/wwwroot/photos/lanai/28_500.jpg 500w',
    '/wwwroot/photos/lanai/28_320.jpg 320w'
  ],
  sizes: [
    '(min-width: 480px) 50vw',
    '(min-width: 1024px) 33.3vw',
    '100vw'
  ],
  width: 600,
  height: 600,
  alt: 'image 2'
}
*/
?>


<!doctype html>
<html lang="en">

<head>
  <title>Sammie Khalil Taylor</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
  <!--<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">-->
  <link rel="stylesheet" href="/styles/style.css">
  <script type="text/javascript">
  var json = {};
  json['1'] = <?=dirToJson('images/wireframes');?>;
  json['2'] = <?=dirToJson('images/branding');?>;
  json['3'] = <?=dirToJson('images/contentcopy');?>;
  json['4'] = <?=dirToJson('images/analytics');?>;
  </script>
</head>

<body>
  <div id="master" class="container-fluid p-0">
    <pre></pre>
      <div class="row">
        <div class="pl-5 col-6">
          <h5>Marketing <span class="ampersand">&amp;</span> Design</h5>
          <h1>SAMMIE</h1>
        </div>
        <div class="col-6 pr-1 pl-1">
          <img class="img-fluid" src="/images/headshot.jpg" />
        </div>
      </div>
    </header>
    <div class="d-flex">
      <section data-id="1" class="sectionCta pr-1 pl-1 col-3">
        <div class="container pink-bg">
          <img src="/images/wireframeicon.png" class="sectionBg" alt="Wireframes Icon" />
          <div class="row flex-column justify-content-center align-items-center">
            <img src="/images/wireframeicon.png" class="sectionIcon" alt="Wireframes Icon" />
            <h2 class="align-self-center">Storyboards <span class="ampersand">&amp;</span> Wireframes</h2>
            <img src="/images/angle-down.svg" class="arrowIcon" alt="angle-down" />
          </div>
        </div>
      </section>
      <section data-id="2" class="sectionCta pr-1 pl-1 col-3">
        <div class="container yellow-bg">
          <img src="/images/brandingicon.png" class="sectionBg" alt="Branding icon" />
          <div class="row flex-column justify-content-center align-items-center">
            <img src="/images/brandingicon.png" class="sectionIcon" alt="Branding icon" />
            <h2 class="align-self-center">Branding <span class="ampersand">&amp;</span> Design</h2>
            <img src="/images/angle-down.svg" class="arrowIcon" alt="angle-down" />
          </div>
        </div>
      </section>
      <section data-id="3" class="sectionCta pr-1 pl-1 col-3">
        <div class="container blue-bg ">
          <img src="/images/copywritingicon.png" class="sectionBg" alt="Copy Writing Icon" />
          <div class="row flex-column justify-content-center align-items-center">
            <img src="/images/copywritingicon.png" class="sectionIcon" alt="Copy Writing Icon" />
            <h2 class="align-self-center">Copy <span class="ampersand">&amp;</span> CTAs</h2>
            <img src="/images/angle-down.svg" class="arrowIcon" alt="angle-down" />
          </div>
        </div>
      </section>
      <section data-id="4" class="sectionCta pr-1 pl-1 col-3">
        <div class="container green-bg">
          <img src="/images/analyticsicon.png" class="sectionBg" alt="Analytics Icon" />
          <div class="row flex-column justify-content-center align-items-center">
            <img src="/images/analyticsicon.png" class="sectionIcon" alt="Analytics Icon" />
            <h2 class="align-self-center">Analytics <span class="ampersand">&amp;</span> KPIs</h2>
            <img src="/images/angle-down.svg" class="arrowIcon" alt="angle-down" />
          </div>
        </div>
      </section>
    </div>

    <!-- SECTION DETAILS BEGIN -->
    <section data-id="1" class="sectionDetail p-1">
      <div class="container pink-bg ">
        <div class="row textBlock">
          <div class="col-2 align-self-center">
            <img src="images/wireframeicon.png" class="sectionIcon" alt="analyticsicon" />
          </div>
          <div class="col-10 align-self-center">
            <h2>Storyboards and Wireframes</h2>
            <p class="lead">Before diving into the pretty stuff, I like to layout content components and CTA's to allow some structure for the upcoming design to rely on.</p>
            <img src="images/angle-down.svg" class="arrowIcon" alt="angle-down" data-id="1" />
          </div>
        </div>
        <div class="col-12 sectionImages"></div>
      </div>
    </section>
    <section data-id="2" class="sectionDetail p-1">
      <div class="container yellow-bg ">
        <div class="row textBlock">
          <div class="col-2 align-self-center">
            <img src="images/brandingicon.png" class="sectionIcon" alt="analyticsicon" />
          </div>
          <div class="col-10 align-self-center">
            <h2>Branding and Design</h2>
            <p class="lead">I approach design through three key elements, Typography, Color, and Space. I combine these elements to create a rich, attractive message in as little space as possible.</p>
            <img src="images/angle-down.svg" class="arrowIcon" alt="angle-down" data-id="2" />
          </div>
          <div class="col-12 sectionImages"></div>
        </div>
      </div>
    </section>
    <section data-id="3" class="sectionDetail p-1">
      <div class="container blue-bg ">
        <div class="row textBlock">
          <div class="col-2 align-self-center">
            <img src="images/copywritingicon.png" class="sectionIcon" alt="analyticsicon" />
          </div>
          <div class="col-10 align-self-center">
            <h2>Content Copy and CTA's</h2>
            <p class="lead">Playing with words is a hobby of mine. I believe that understanding which acronyms and industry jargons are popular among the target demographics is key to creating quality copy. In the english language alone, I can speak to an older mature
              audience in industry jargon, while also relating to the teeny bopper crowd, with the right emoticons, of course.</p>
            <img src="images/angle-down.svg" class="arrowIcon" alt="angle-down" data-id="3" />
          </div>
          <div class="col-12 sectionImages"></div>
        </div>
      </div>
    </section>
    <section data-id="4" class="sectionDetail p-1">
      <div class="container green-bg ">
        <div class="row">
          <div class="col-2 align-self-center">
            <img src="images/analyticsicon.png" class="sectionIcon" alt="analyticsicon" />
          </div>
          <div class="col-10 align-self-center">
            <h2>Engagement Analytics and KPIs</h2>
            <p class="lead">Like many things in life, It's not all about looks. Conversion rates and KPIs are much better measurements for effectiveness than aesthetic opinion.</p>
            <img src="images/angle-down.svg" class="arrowIcon" alt="angle-down" data-id="4" />
          </div>
          <div class="col-12 sectionImages"></div>
        </div>
      </div>
    </section>
    <!-- SECTION DETAILS END -->

    <footer class="mt-5 mb-5">
      <p style="text-align:center">get@sammietaylor.com - 415-300-0834</p>
    </footer>
  </div>
  <script
    src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E="
    crossorigin="anonymous"></script>
  <script type="text/javascript">
  $(document).ready(function(){
    $('.sectionCta').click(function(){
      var id = $(this).attr('data-id');
      var el = $(".sectionDetail[data-id="+id+"]");
      if (!el.hasClass('expand')) {
        if (!el.hasClass('lazyloaded')) {

        }
        $(".sectionDetail[data-id="+id+"]").addClass('expand');
        setTimeout(function() {
          $('.textBlock').addClass('expanded');
        }, 1000);
      } else {
        $('.textBlock').removeClass('expanded');
        setTimeout(function() {
          $(".sectionDetail").removeClass('expand');
        }, 500);
      }
    });
    $('.sectionDetail .arrowIcon').click(function(){
      $('.textBlock').removeClass('expanded');
      setTimeout(function() {
        $(".sectionDetail").removeClass('expand');
      }, 500);
    });
});
  </script>
</body>

</html>
