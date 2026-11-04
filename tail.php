<?php
if (!defined('_GNUBOARD_')) exit;
?>

        </div>
    </div>
</div>

<!-- 미에로 푸터 -->
<?php include_once(G5_PATH.'/miero/footer.php'); ?>

<?php
if ($config['cf_analytics']) {
    echo $config['cf_analytics'];
}
?>

<script>
$(function() {
    font_resize(
        "container",
        get_cookie("ck_font_resize_rmv_class"),
        get_cookie("ck_font_resize_add_class")
    );
});
</script>

<?php
include_once(G5_PATH."/tail.sub.php");
?>