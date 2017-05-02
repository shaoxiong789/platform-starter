<template>
  <div class="js_textArea inner no_extra">
    <div class="emotion_editor">
      <div class="edit_area js_editorArea" contenteditable="true" style="overflow-y: auto; overflow-x: hidden;"
      @input="changeText($event)" v-text="innerText">
      </div>
      <div class="editor_toolbar">
        <a href="javascript:void(0);" @click.stop="trigger_emotions" class="icon_emotion emotion_switch js_switch">表情</a>
        <p class="editor_tip js_editorTip">还可以输入<em>600</em>字</p>
        <div class="emotion_wrp js_emotionArea" v-show="emotions_show">
          <span class="hook">
            <span class="hook_dec hook_top"></span>
            <span class="hook_dec hook_btm"></span>
          </span>
          <ul class="emotions" @blur="trigger_emotions" onselectstart="return false;">

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_0" data-title="[微笑]" style="background-position:0 -0px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_1" data-title="[撇嘴]" style="background-position:0 -20px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_2" data-title="[色]" style="background-position:0 -40px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_3" data-title="[发呆]" style="background-position:0 -60px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_4" data-title="[得意]" style="background-position:0 -80px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_5" data-title="[流泪]" style="background-position:0 -100px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_6" data-title="[害羞]" style="background-position:0 -120px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_7" data-title="[闭嘴]" style="background-position:0 -140px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_8" data-title="[睡]" style="background-position:0 -160px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_9" data-title="[大哭]" style="background-position:0 -180px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_10" data-title="[尴尬]" style="background-position:0 -200px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_11" data-title="[发怒]" style="background-position:0 -220px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_12" data-title="[调皮]" style="background-position:0 -240px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_13" data-title="[呲牙]" style="background-position:0 -260px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_14" data-title="[惊讶]" style="background-position:0 -280px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_15" data-title="[难过]" style="background-position:0 -300px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_17" data-title="[冷汗]" style="background-position:0 -320px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_18" data-title="[抓狂]" style="background-position:0 -340px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_19" data-title="[吐]" style="background-position:0 -360px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_20" data-title="[偷笑]" style="background-position:0 -380px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_21" data-title="[愉快]" style="background-position:0 -400px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_22" data-title="[白眼]" style="background-position:0 -420px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_23" data-title="[傲慢]" style="background-position:0 -440px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_25" data-title="[困]" style="background-position:0 -460px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_26" data-title="[惊恐]" style="background-position:0 -480px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_27" data-title="[流汗]" style="background-position:0 -500px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_28" data-title="[憨笑]" style="background-position:0 -520px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_29" data-title="[悠闲]" style="background-position:0 -540px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_30" data-title="[奋斗]" style="background-position:0 -560px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_31" data-title="[咒骂]" style="background-position:0 -580px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_32" data-title="[疑问]" style="background-position:0 -600px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_33" data-title="[嘘]" style="background-position:0 -620px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_34" data-title="[晕]" style="background-position:0 -640px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_36" data-title="[衰]" style="background-position:0 -660px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_37" data-title="[骷髅]" style="background-position:0 -680px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_38" data-title="[敲打]" style="background-position:0 -700px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_39" data-title="[再见]" style="background-position:0 -720px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_40" data-title="[擦汗]" style="background-position:0 -740px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_41" data-title="[抠鼻]" style="background-position:0 -760px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_42" data-title="[鼓掌]" style="background-position:0 -780px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_44" data-title="[坏笑]" style="background-position:0 -800px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_45" data-title="[左哼哼]" style="background-position:0 -820px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_46" data-title="[右哼哼]" style="background-position:0 -840px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_47" data-title="[哈欠]" style="background-position:0 -860px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_48" data-title="[鄙视]" style="background-position:0 -880px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_49" data-title="[委屈]" style="background-position:0 -900px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_50" data-title="[快哭了]" style="background-position:0 -920px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_51" data-title="[阴险]" style="background-position:0 -940px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_52" data-title="[亲亲]" style="background-position:0 -960px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_54" data-title="[可怜]" style="background-position:0 -980px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_55" data-title="[菜刀]" style="background-position:0 -1000px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_56" data-title="[西瓜]" style="background-position:0 -1020px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_57" data-title="[啤酒]" style="background-position:0 -1040px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_60" data-title="[咖啡]" style="background-position:0 -1060px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_62" data-title="[猪头]" style="background-position:0 -1080px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_63" data-title="[玫瑰]" style="background-position:0 -1100px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_64" data-title="[凋谢]" style="background-position:0 -1120px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_65" data-title="[嘴唇]" style="background-position:0 -1140px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_66" data-title="[爱心]" style="background-position:0 -1160px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_67" data-title="[心碎]" style="background-position:0 -1180px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_68" data-title="[蛋糕]" style="background-position:0 -1200px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_70" data-title="[炸弹]" style="background-position:0 -1220px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_74" data-title="[便便]" style="background-position:0 -1240px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_75" data-title="[月亮]" style="background-position:0 -1260px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_76" data-title="[太阳]" style="background-position:0 -1280px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_78" data-title="[拥抱]" style="background-position:0 -1300px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_79" data-title="[强]" style="background-position:0 -1320px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_80" data-title="[弱]" style="background-position:0 -1340px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_81" data-title="[握手]" style="background-position:0 -1360px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_82" data-title="[胜利]" style="background-position:0 -1380px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_83" data-title="[抱拳]" style="background-position:0 -1400px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_84" data-title="[勾引]" style="background-position:0 -1420px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_85" data-title="[拳头]" style="background-position:0 -1440px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_89" data-title="[OK]" style="background-position:0 -1460px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_92" data-title="[跳跳]" style="background-position:0 -1480px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_93" data-title="[发抖]" style="background-position:0 -1500px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_94" data-title="[怄火]" style="background-position:0 -1520px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_smiley_95" data-title="[转圈]" style="background-position:0 -1540px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_emoji_ios_0" data-title="😄" style="background-position:0 -1560px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_emoji_ios_1" data-title="😷" style="background-position:0 -1580px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_emoji_ios_2" data-title="😂" style="background-position:0 -1600px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_emoji_ios_3" data-title="😝" style="background-position:0 -1620px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_emoji_ios_4" data-title="😳" style="background-position:0 -1640px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_emoji_ios_5" data-title="😱" style="background-position:0 -1660px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_emoji_ios_6" data-title="😔" style="background-position:0 -1680px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_emoji_ios_7" data-title="😒" style="background-position:0 -1700px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_emoji_wx_4" data-title="[嘿哈]" style="background-position:0 -1720px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_emoji_wx_5" data-title="[捂脸]" style="background-position:0 -1740px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_emoji_wx_2" data-title="[奸笑]" style="background-position:0 -1760px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_emoji_wx_6" data-title="[机智]" style="background-position:0 -1780px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_emoji_wx_12" data-title="[皱眉]" style="background-position:0 -1800px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_emoji_wx_11" data-title="[耶]" style="background-position:0 -1820px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_emoji_ios_8" data-title="👻" style="background-position:0 -1840px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_emoji_ios_9" data-title="🙏" style="background-position:0 -1860px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_emoji_ios_10" data-title="💪" style="background-position:0 -1880px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_emoji_ios_11" data-title="🎉" style="background-position:0 -1900px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_emoji_ios_12" data-title="[礼物]" style="background-position:0 -1920px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_emoji_wx_9" data-title="[红包]" style="background-position:0 -1940px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="icon_emoji_wx_14" data-title="[鸡]" style="background-position:0 -1960px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="" data-title="" style="background-position:0 -2660px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="" data-title="" style="background-position:0 -2660px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="" data-title="" style="background-position:0 -2660px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="" data-title="" style="background-position:0 -2660px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="" data-title="" style="background-position:0 -2660px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="" data-title="" style="background-position:0 -2660px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="" data-title="" style="background-position:0 -2660px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="" data-title="" style="background-position:0 -2660px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="" data-title="" style="background-position:0 -2660px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="" data-title="" style="background-position:0 -2660px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="" data-title="" style="background-position:0 -2660px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="" data-title="" style="background-position:0 -2660px;"></span>
            </li>

            <li class="emotions_item">
              <span class="icon_emotion_sprite js_emotion_i" data-name="" data-title="" style="background-position:0 -2660px;"></span>
            </li>

          </ul>
          <span class="emotions_preview js_emotionPreviewArea"></span>
        </div>
      </div>
    </div>

  </div>

</template>
<script>
  import { on, off } from 'element-ui/src/utils/dom';
  String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
  };
  export default {
    props: ['value'],
    data() {
      return {
        emotions_show: false,
        innerText: this.value
      }
    },
    methods: {
      trigger_emotions: function() {
        if(!this.emotions_show){
          this.emotions_show = true;
        }
      },
      changeText($event) {
        this.innerText = $event.currentTarget.innerHTML;
        this.$emit('input', this.innerText)
      },
      getCaretPosition: function() {
          var oField = this.$el.querySelector('.js_editorArea')
          var iCaretPos = 0;
          var doc = oField.ownerDocument || oField.document;
          var win = doc.defaultView || doc.parentWindow;
          var sel;
          if (typeof win.getSelection != "undefined") {
              sel = win.getSelection();
              if (sel.rangeCount > 0) {
                  var range = win.getSelection().getRangeAt(0);
                  var preCaretRange = range.cloneRange();
                  preCaretRange.selectNodeContents(oField);
                  preCaretRange.setEnd(range.endContainer, range.endOffset);
                  // iCaretPos = preCaretRange.toString().length;
                  iCaretPos = {startOffset:range.startOffset,endOffset:range.endOffset}
              }
          } else if ( (sel = doc.selection) && sel.type !== 'Control') {
              var textRange = sel.createRange();
              var preCaretTextRange = doc.body.createTextRange();
              preCaretTextRange.moveToElementText(oField);
              preCaretTextRange.setEndPoint('EndToEnd', textRange);
              iCaretPos = preCaretTextRange.text.length;
          }
          return (iCaretPos);
      }
    },
    mounted() {
      on(document, 'click', ()=>{
        if(this.emotions_show == true){
          this.emotions_show = false
        }
      });
      this.$el.querySelectorAll('.emotions_item').forEach((el)=> {
        on(el, 'click', ()=>{
          let $js_emotion_i = el.querySelector('.js_emotion_i')
          let emotion = $js_emotion_i.getAttribute('data-title');
          console.log(this.getCaretPosition())
          var iCaretPos = this.getCaretPosition()
          if(iCaretPos==0){
            this.innerText+=emotion;
          }else{
            this.innerText = this.innerText.splice(iCaretPos.startOffset,iCaretPos.endOffset-iCaretPos.startOffset,emotion)
          }
          var $js_editorArea = this.$el.querySelector('.js_editorArea')
          $js_editorArea.focus();
          console.log(emotion)
        })
      })
    }
  }
</script>
<style scoped>
body, h1, h2, h3, h4, h5, h6, p, ul, ol, dl, dd, fieldset, textarea {
    margin: 0;
}
ul, ol {
    padding-left: 0;
    list-style-type: none;
}body, h1, h2, h3, h4, h5, h6, p, ul, ol, dl, dd, fieldset, textarea {
    margin: 0;
}
.emotion_editor {
    position: relative;
    z-index: 1;
    border: 1px solid #e7e7eb;
    border-radius: 0;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
}.emotion_editor .edit_area {
    padding: 14px 20px;
    outline: 0;
    word-wrap: break-word;
    word-break: break-all;
    border-top-left-radius: 0;
    -moz-border-radius-topleft: 0;
    -webkit-border-top-left-radius: 0;
    border-top-right-radius: 0;
    -moz-border-radius-topright: 0;
    -webkit-border-top-right-radius: 0;
    background-color: #fff;
    height: 188px;
}.menu_form_area .msg_sender .emotion_editor .edit_area {
    height: 151px;
}.editor_toolbar {
    overflow: hidden;
    padding-bottom: 10px;
    border-bottom: 1px solid #e7e7eb;
}.editor_toolbar {
    padding: 0 20px;
    line-height: 36px;
    background-color: #fff;
    border-top: 1px solid #e7e7eb;
}.menu_form_area .msg_sender .editor_toolbar {
    border-bottom: 0;
    padding-bottom: 0;
}.editor_tip {
    float: right;
    color: #8d8d8d;
}a {
    color: #459ae9;
}.emotion_switch {
    float: left;
    margin-top: 8px;
    height: 28px;
    line-height: 999em;
    overflow: hidden;
}.icon_emotion.emotion_switch {
    background: url(../img/emotion_editor_z3518e7.png) 0 0 no-repeat;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    display: inline-block;
}.icon_emotion.emotion_switch:hover {
    background: url(../img/emotion_editor_z3518e7.png) 0 -24px no-repeat;
}.emotion_wrp {
    position: absolute;
    width: 401px;
    top: 100%;
    left: -1px;
}.hook {
    position: absolute;
    left: 21px;
    top: 0;
}.hook .hook_dec {
    position: absolute;
    left: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px;
}.hook .hook_top {
    top: -16px;
    border-color: transparent transparent #c0bfc5;
}.hook .hook_dec {
    position: absolute;
    left: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px;
}.hook .hook_btm {
    top: -15px;
    border-color: transparent transparent #f6f6f6;
}.emotions {
    -moz-user-select: none;
    overflow: hidden;
    border-top: 1px solid #c0bfc5;
    border-right: 1px solid #c0bfc5;
    background-color: #e7e7eb;
}.emotions_item {
    float: left;
    width: 24px;
    height: 24px;
    line-height: 24px;
    font-size: 0;
    text-align: center;
    border-bottom: 1px solid #c0bfc5;
    border-left: 1px solid #c0bfc5;
    background-color: #fff;
}.icon_emotion_sprite {
    cursor: pointer;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    display: inline-block;
    background: transparent url(../img/icon_emotion_panel.2x3518e6.png) no-repeat 0 0;
    -webkit-background-size: 20px auto;
    background-size: 20px auto;
}
</style>
