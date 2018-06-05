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
  return $images;
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
$pData = array(
  'gallery1'=>dirToJson('images/wireframes'),
  'gallery2'=>dirToJson('images/branding'),
  'gallery3'=>dirToJson('images/contentcopy'),
  'gallery4'=>dirToJson('images/analytics'),
);
$index = file_get_contents(ROOT_CD.'/index.html');
$index = str_replace('<!--PORTFOLIO_DATA-->', ' portfolio = '.json_encode($pData), $index);
echo $index;
