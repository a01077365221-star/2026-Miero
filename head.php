<?php
if (!defined('_GNUBOARD_')) exit;

run_event('pre_head');

include_once(G5_PATH.'/head.sub.php');
include_once(G5_LIB_PATH.'/latest.lib.php');
include_once(G5_LIB_PATH.'/outlogin.lib.php');
include_once(G5_LIB_PATH.'/poll.lib.php');
include_once(G5_LIB_PATH.'/visit.lib.php');
include_once(G5_LIB_PATH.'/connect.lib.php');
include_once(G5_LIB_PATH.'/popular.lib.php');
?>

<!-- 미에로 CSS -->
<link rel="stylesheet" href="https://heoyujeong.dothome.co.kr/miero/css/reset.css">
<link rel="stylesheet" href="https://heoyujeong.dothome.co.kr/miero/css/base.css">
<link rel="stylesheet" href="https://heoyujeong.dothome.co.kr/miero/css/common.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.3.1/css/all.min.css">

<!-- 헤더 테스트 -->
<div style="background:red; color:white; padding:20px; text-align:center;">
    헤더 테스트 중
</div>

<!-- 미에로 헤더 -->
<?php include_once(G5_PATH.'/miero/header.php'); ?>

<!-- 게시판 콘텐츠 시작 -->
<div id="wrapper">
    <div id="container_wr">
        <div id="container">

            <?php if (!defined("_INDEX_")) { ?>
                <h2 id="container_title">
                    <span title="<?php echo get_text($g5['title']); ?>">
                        <?php echo get_head_title($g5['title']); ?>
                    </span>
                </h2>
            <?php } ?>