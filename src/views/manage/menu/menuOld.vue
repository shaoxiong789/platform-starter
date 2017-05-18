<template>
  <div class="menu_setting_area js_editBox">

    <!-- 左侧菜单可视化 -->
    <div class="menu_preview_area">
      <div class="mobile_menu_preview">
        <div class="mobile_hd tc">自控力school</div>
        <div class="mobile_bd">
          <ul class="pre_menu_list grid_line ui-sortable ui-sortable-disabled" id="menuList">
            <li class="jsMenu pre_menu_item grid_item jslevel1 ui-sortable ui-sortable-disabled size1of3 " id="menu_0">
              <a href="javascript:void(0);" class="pre_menu_link" draggable="false">

                <i class="icon_menu_dot js_icon_menu_dot dn"></i>
                <i class="icon20_common sort_gray"></i>
                <span class="js_l1Title">快看</span>
              </a>
              <div class="sub_pre_menu_box js_l2TitleBox" style="display:none;">
                <ul class="sub_pre_menu_list">

                  <li id="subMenu_menu_0_0" class="jslevel2"><a href="javascript:void(0);" class="jsSubView" draggable="false"><span class="sub_pre_menu_inner js_sub_pre_menu_inner"><i class="icon20_common sort_gray"></i><span class="js_l2Title">冥想</span></span></a></li>

                  <li id="subMenu_menu_0_1" class="jslevel2"><a href="javascript:void(0);" class="jsSubView" draggable="false"><span class="sub_pre_menu_inner js_sub_pre_menu_inner"><i class="icon20_common sort_gray"></i><span class="js_l2Title">运动</span></span></a></li>

                  <li id="subMenu_menu_0_2" class="jslevel2"><a href="javascript:void(0);" class="jsSubView" draggable="false"><span class="sub_pre_menu_inner js_sub_pre_menu_inner"><i class="icon20_common sort_gray"></i><span class="js_l2Title">读写</span></span></a></li>

                  <li id="subMenu_menu_0_3" class="jslevel2"><a href="javascript:void(0);" class="jsSubView" draggable="false"><span class="sub_pre_menu_inner js_sub_pre_menu_inner"><i class="icon20_common sort_gray"></i><span class="js_l2Title">更多分享</span></span></a></li>

                  <li id="subMenu_menu_0_4" class="jslevel2"><a href="javascript:void(0);" class="jsSubView" draggable="false"><span class="sub_pre_menu_inner js_sub_pre_menu_inner"><i class="icon20_common sort_gray"></i><span class="js_l2Title">文章搜素</span></span></a></li>

                  <li class="js_addMenuBox"><a href="javascript:void(0);" class="jsSubView js_addL2Btn" title="最多添加5个子菜单" draggable="false"><span class="sub_pre_menu_inner js_sub_pre_menu_inner"><i class="icon14_menu_add"></i></span></a></li>
                </ul>
                <i class="arrow arrow_out"></i>
                <i class="arrow arrow_in"></i>
              </div>
            </li>

            <li class="jsMenu pre_menu_item grid_item jslevel1 ui-sortable ui-sortable-disabled size1of3" id="menu_1">
              <a href="javascript:void(0);" class="pre_menu_link" draggable="false">

                <i class="icon_menu_dot js_icon_menu_dot dn"></i>
                <i class="icon20_common sort_gray"></i>
                <span class="js_l1Title">关于我们</span>
              </a>
              <div class="sub_pre_menu_box js_l2TitleBox" style="">
                <ul class="sub_pre_menu_list">

                  <li id="subMenu_menu_1_0" class="jslevel2 current selected">
                    <a href="javascript:void(0);" class="jsSubView" draggable="false">
                      <span class="sub_pre_menu_inner js_sub_pre_menu_inner">
                        <i class="icon20_common sort_gray"></i>
                        <span class="js_l2Title">转载需知</span>
                      </span>
                    </a>
                  </li>

                  <li id="subMenu_menu_1_1" class="jslevel2">
                    <a href="javascript:void(0);" class="jsSubView" draggable="false">
                      <span class="sub_pre_menu_inner js_sub_pre_menu_inner">
                        <i class="icon20_common sort_gray"></i>
                        <span class="js_l2Title">往期训练营</span>
                      </span>
                    </a>
                  </li>

                  <li class="js_addMenuBox">
                    <a href="javascript:void(0);" class="jsSubView js_addL2Btn" title="最多添加5个子菜单" draggable="false">
                      <span class="sub_pre_menu_inner js_sub_pre_menu_inner">
                        <i class="icon14_menu_add"></i>
                      </span>
                    </a>
                  </li>
                </ul>
                <i class="arrow arrow_out"></i>
                <i class="arrow arrow_in"></i>
              </div>
            </li>

            <li class="jsMenu pre_menu_item grid_item jslevel1 ui-sortable ui-sortable-disabled size1of3" id="menu_2">
              <a href="javascript:void(0);" class="pre_menu_link" draggable="false">

                <i class="icon_menu_dot js_icon_menu_dot dn" style="display: none;"></i>
                <i class="icon20_common sort_gray"></i>
                <span class="js_l1Title">招募</span>
              </a>
              <div class="sub_pre_menu_box js_l2TitleBox" style="display:none;">
                <ul class="sub_pre_menu_list">

                  <li class="js_addMenuBox"><a href="javascript:void(0);" class="jsSubView js_addL2Btn" title="最多添加5个子菜单" draggable="false"><span class="sub_pre_menu_inner js_sub_pre_menu_inner"><i class="icon14_menu_add"></i></span></a></li>
                </ul>
                <i class="arrow arrow_out"></i>
                <i class="arrow arrow_in"></i>
              </div>
            </li>

            <li class="js_addMenuBox pre_menu_item grid_item no_extra">
              <a href="javascript:void(0);" class="pre_menu_link js_addL1Btn" title="最多添加3个一级菜单" draggable="false">
                <i class="icon14_menu_add"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="sort_btn_wrp">
        <a id="orderBt" class="btn btn_default" href="javascript:void(0);" style="display: inline-block;">菜单排序</a>
        <a id="finishBt" href="javascript:void(0);" class="btn btn_default">完成</a>
      </div>
    </div>

    <!-- 右侧菜单管理 -->
    <div class="menu_form_area">
      <div id="js_none" class="menu_initial_tips tips_global" style="display: none;">点击左侧菜单进行编辑操作</div>
      <div id="js_rightBox" class="portable_editor to_left" style="display: block;">
        <div class="editor_inner">
          <div class="global_mod float_layout menu_form_hd js_second_title_bar">
            <h4 class="global_info">转载需知</h4>
            <div class="global_extra"> <a href="javascript:void(0);" id="jsDelBt">删除子菜单</a> </div>
          </div>
          <div class="menu_form_bd" id="view">
            <div id="js_innerNone" style="display: none;" class="msg_sender_tips tips_global">已添加子菜单，仅可设置菜单名称。</div>
            <div class="frm_control_group js_setNameBox"> <label for="" class="frm_label">                                    <strong class="title js_menuTitle">子菜单名称</strong>                                </label>
              <div class="frm_controls"> <span class="frm_input_box with_counter counter_in append">                                        <input type="text" class="frm_input js_menu_name">                                    </span>
                <p class="frm_msg fail js_titleEorTips dn" style="display: block;">字数超过上限</p>
                <p class="frm_msg fail js_titlenoTips dn" style="display: block;">请输入菜单名称</p>
                <p class="frm_tips js_titleNolTips">字数不超过8个汉字或16个字母</p>
              </div>
            </div>
            <div class="frm_control_group" style="display: block;">
              <label for="" class="frm_label">
                <strong class="title js_menuContent">子菜单内容</strong>
              </label>
              <div class="frm_controls frm_vertical_pt">
                <label class="frm_radio_label js_radio_sendMsg selected" data-editing="0">
                  <input type="radio" name="hello" class="frm_radio">
                  <span class="lbl_content">发送消息</span>
                </label>
                <label class="frm_radio_label js_radio_url" data-editing="0">
                  <input type="radio" name="hello" class="frm_radio">
                  <span class="lbl_content">跳转网页</span>
                </label>
                <label class="frm_radio_label js_radio_weapp" data-editing="0">
                  <input type="radio" name="hello" class="frm_radio">
                  <span class="lbl_content">跳转小程序</span>
                </label>
              </div>
            </div>
            <div class="menu_content_container" style="display: block;">
              <div class="menu_content send jsMain" id="edit" style="display: block;">
                <div class="msg_sender" id="editDiv">
                  <div class="msg_tab">
                    <div class="tab_navs_panel">
                      <span class="tab_navs_switch_wrp switch_prev js_switch_prev">
                        <span class="tab_navs_switch"></span>
                      </span>
                      <span class="tab_navs_switch_wrp switch_next js_switch_next">
                        <span class="tab_navs_switch"></span>
                      </span>
                      <div class="tab_navs_wrp">
                        <ul class="tab_navs js_tab_navs" style="margin-left:0;">
                          <li class="tab_nav tab_appmsg width5 selected" data-type="10" data-tab=".js_appmsgArea" data-tooltip="图文消息">
                            <a href="javascript:void(0);" onclick="return false;">&nbsp;<i class="icon_msg_sender"></i><span class="msg_tab_title">图文消息</span></a>
                          </li>

                          <li class="tab_nav tab_text width5" data-type="1" data-tab=".js_textArea" data-tooltip="文字">
                            <a href="javascript:void(0);" onclick="return false;">&nbsp;<i class="icon_msg_sender"></i><span class="msg_tab_title">文字</span></a>
                          </li>

                          <li class="tab_nav tab_img width5" data-type="2" data-tab=".js_imgArea" data-tooltip="图片">
                            <a href="javascript:void(0);" onclick="return false;">&nbsp;<i class="icon_msg_sender"></i><span class="msg_tab_title">图片</span></a>
                          </li>

                          <li class="tab_nav tab_audio width5" data-type="3" data-tab=".js_audioArea" data-tooltip="语音">
                            <a href="javascript:void(0);" onclick="return false;">&nbsp;<i class="icon_msg_sender"></i><span class="msg_tab_title">语音</span></a>
                          </li>

                          <li class="tab_nav tab_video width5 no_extra" data-type="15" data-tab=".js_videoArea" data-tooltip="视频">
                            <a href="javascript:void(0);" onclick="return false;">&nbsp;<i class="icon_msg_sender"></i><span class="msg_tab_title">视频</span></a>
                          </li>

                        </ul>
                      </div>
                    </div>
                    <div class="tab_panel">

                      <div class="tab_content" style="display: block;">
                        <div class="js_appmsgArea inner ">
                          <!--type 10图文 2图片  3语音 15视频 11商品消息-->

                          <div class="tab_cont_cover jsMsgSendTab" data-index="0" style="display: none;">
                            <div class="media_cover">
                              <span class="create_access">
	                              <a class="add_gray_wrp jsMsgSenderPopBt" href="javascript:;" data-type="10" data-index="0">
                                  <i class="icon36_common add_gray"></i>
                                  <strong>从素材库中选择</strong>
                                </a>
	                            </span>
                            </div>
                            <div class="media_cover">
                              <span class="create_access">
                                <a target="_blank" class="add_gray_wrp" href="/cgi-bin/appmsg?t=media/appmsg_edit&amp;action=edit&amp;type=10&amp;isMul=1&amp;isNew=1&amp;lang=zh_CN&amp;token=310231230">
                                  <i class="icon36_common add_gray"></i>
	                                <strong>新建图文消息</strong>
                                </a>
			                 </span>
                            </div>
                          </div>
                          <div id="msgSender_media_5_10">
                            <div class="appmsg single has_first_cover" data-id="502376591" data-fileid="502376547" data-completed="1">
                              <div class="appmsg_content">
                                <div class="appmsg_info">

                                  <em class="appmsg_date">03月15日</em>


                                </div>

                                <div class="appmsg_item">
                                  <h4 class="appmsg_title js_title">

                                    <a href="" target="_blank" data-msgid="502376591" data-idx="">转载须知</a>
                                  </h4>
                                  <div class="appmsg_thumb_wrp" style="background-image:url('https://mmbiz.qlogo.cn/mmbiz_jpg/g85kbfEZlSaFibFPkMXx78PSVJOruF3dxC0hO3IcB4rmIRIvl3B6Fe5LnGhqhhJl4ric1iazWX7Z3ZSunSv2TvcSg/0?wx_fmt=jpeg')">
                                  </div>
                                  <p class="appmsg_desc">如果您对我们的文章感兴趣并有意转载，请先阅读本文。</p>
                                  <a href="" class="edit_mask preview_mask js_preview" data-msgid="502376591" data-idx="">
                                    <div class="edit_mask_content">
                                      <p class="">
                                        预览文章
                                      </p>
                                    </div>
                                    <span class="vm_box"></span>
                                  </a>

                                </div>

                              </div>
                            </div>
                            <a href="javascript:;" class="link_dele jsmsgSenderDelBt" onclick="return false;">删除</a>
                          </div>
                        </div>
                      </div>

                      <div class="tab_content" v-show="true">
                        <wx-text-area v-model="text"></wx-text-area>
                      </div>

                      <div class="tab_content" v-show="true">
                        <div class="js_imgArea inner ">
                          <!--type 10图文 2图片  3语音 15视频 11商品消息-->

                          <div class="tab_cont_cover jsMsgSendTab" data-index="2" data-type="2">
                            <div class="media_cover">
                              <span class="create_access">
			                           <a class="add_gray_wrp jsMsgSenderPopBt" href="javascript:;" data-type="2" data-index="2">
                                   <i class="icon36_common add_gray"></i>
                                   <strong>从素材库中选择</strong>
                                 </a>
		                          </span>
                            </div>
                            <div class="media_cover">
                              <span class="create_access">
			                           <a class="add_gray_wrp" id="msgSendImgUploadBt" data-type="2" href="javascript:;">
                                   <i class="icon36_common add_gray"></i>
                                   <strong>上传图片</strong>
                                 </a>
		                          </span>
                            </div>
                          </div>

                        </div>
                      </div>

                      <div class="tab_content" v-show="true">
                        <div class="js_audioArea inner ">
                          <!--type 10图文 2图片  3语音 15视频 11商品消息-->

                          <div class="tab_cont_cover jsMsgSendTab" data-index="3" data-type="3">
                            <div class="media_cover">
                              <span class="create_access">
			                           <a class="add_gray_wrp jsMsgSenderPopBt" href="javascript:;" data-type="3" data-index="3">
                                   <i class="icon36_common add_gray"></i>
                                   <strong>从素材库中选择</strong>
                                 </a>
		                          </span>
                            </div>
                            <div class="media_cover">
                              <span class="create_access">
			                           <a class="add_gray_wrp " id="msgSendAudioUploadBt" href="javascript:;">
                                    <i class="icon36_common add_gray"></i>
                                    <strong>新建语音</strong>
                                 </a>
		                          </span>
                            </div>
                          </div>

                        </div>
                      </div>

                      <div class="tab_content" v-show="true">
                        <div class="js_videoArea inner ">
                          <!--type 10图文 2图片  3语音 15视频 11商品消息-->

                          <div class="tab_cont_cover jsMsgSendTab" data-index="4">
                            <div class="media_cover">
                              <span class="create_access">
			                           <a class="add_gray_wrp jsMsgSenderPopBt" href="javascript:;" data-type="15" data-index="4">
                                   <i class="icon36_common add_gray"></i>
                                   <strong>从素材库中选择</strong>
                                 </a>
		                          </span>
                            </div>
                            <div class="media_cover">
                              <span class="create_access">
			                           <a target="_blank" class="add_gray_wrp" href="/cgi-bin/appmsg?t=media/videomsg_edit&amp;action=video_edit&amp;type=15&amp;lang=zh_CN&amp;token=310231230">
                                   <i class="icon36_common add_gray"></i>
                                   <strong>新建视频</strong>
                                 </a>
		                          </span>
                            </div>
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <p class="profile_link_msg_global menu_send mini_tips warn dn js_warn"> 请勿添加其他公众号的主页链接 </p>
              </div>
              <div class="menu_content url jsMain" id="url" style="display: none;">
                <form action="" id="urlForm" onsubmit="return false;">
                  <p class="menu_content_tips tips_global">订阅者点击该子菜单会跳到以下链接</p>
                  <div class="frm_control_group"> <label for="" class="frm_label">页面地址</label>
                    <div class="frm_controls"> <span class="frm_input_box">                                                    <input type="text" class="frm_input" id="urlText" name="urlText">                                                </span>
                      <p class="profile_link_msg_global menu_url mini_tips warn dn js_warn">
                      请勿添加其他公众号的主页链接 </p>
                      <p class="frm_tips" id="js_urlTitle" style="display: none;"> 来自<span class="js_name"></span><span style="display:none;"> -《<span class="js_title"></span>》</span>
                      </p>
                    </div>
                  </div>
                  <div class="frm_control_group btn_appmsg_wrap">
                    <div class="frm_controls">
                      <p class="frm_msg fail dn" id="urlUnSelect" style="display: none;"> <span for="urlText" class="frm_msg_content" style="display: inline;">请选择一篇文章</span> </p> <a href="javascript:;" id="js_appmsgPop">从公众号图文消息中选择</a> <a href="javascript:void(0);" class="dn btn btn_default" id="js_reChangeAppmsg" style="display: none;">重新选择</a>                    </div>
                  </div>
                </form>
              </div>
              <div class="menu_content weapp " id="weapp" style="display: none;">
                <div class="link_weapp_loading js_link_weapp_loading" style="display: none;"> <i class="icon_loading_small white"></i> </div>
                <div class="weapp_empty_box js_weapp_no_binded_hint">
                  <p class="desc">自定义菜单可跳转已绑定的小程序，本公众号尚未绑定小程序。</p> <a href="https://mp.weixin.qq.com/cgi-bin/wxopen?action=list&amp;token=310231230&amp;lang=zh_CN" class="btn btn_default">前往绑定</a> </div>
                <form action="" id="weappSettingsForm" onsubmit="return false;">
                  <p class="menu_content_tips tips_global">订阅者点击该子菜单会跳到以下小程序</p>
                  <div class="frm_control_group js_weapp_select_group"> <label for="" class="frm_label">小程序</label>
                    <div class="frm_controls"> <a href="" class="btn btn_default js_weapp_select">选择小程序</a> </div> <input type="hidden" class="js_weapp_appid" id="" name=""> </div>
                  <div class="frm_control_group js_weapp_path_group"> <label for="" class="frm_label">小程序路径</label>
                    <div class="frm_controls"> <span class="frm_input_box">                                                    <input type="text" class="frm_input js_weapp_path" id="" name="">                                                </span>
                      <p class="frm_tips"> 已选择小程序 - <span class="js_weapp_title">中华小当家</span> </p> <a href="" class="btn btn_default js_weapp_select">重新选择</a> </div>
                  </div>
                  <div class="frm_control_group"> <label for="" class="frm_label">备用网页</label>
                    <div class="frm_controls js_weapp_backup_url_input_wrapper"> <span class="frm_input_box js_weapp_backup_url_input">                                                    <input type="text" class="frm_input js_weapp_backup_url" id="" name="">                                                </span>
                      <div class="js_weapp_backup_url_select" style="display: none">
                        <p><a href="javascript:;" id="js_weapp_appmsgPop">从公众号图文消息中选择</a></p>
                        <p class="frm_tips js_weapp_url_title" style="display: none;"> 来自<span class="js_name"></span><span style="display:none;"> -《<span class="js_title"></span>》</span>
                        </p> <a href="javascript:void(0);" class="dn btn btn_default" id="js_weapp_reChangeAppmsg">重新选择</a> </div>
                      <p class="profile_link_msg_global mini_tips warn dn js_warn"> </p>
                      <p class="frm_tips" id="" style=""> 旧版微信客户端无法支持小程序，用户点击菜单时将会打开备用网页。 </p>
                    </div>
                  </div>
                </form>
              </div>
              <div class="menu_content sended" style="display:none;">
                <p class="menu_content_tips tips_global">订阅者点击该子菜单会跳到以下链接</p>
                <div class="msg_wrp" id="viewDiv">
                  <div class="appmsg single has_first_cover" data-id="502376591" data-fileid="502376547" data-completed="1">
                    <div class="appmsg_content">
                      <div class="appmsg_info">

                        <em class="appmsg_date">03月15日</em>


                      </div>

                      <div class="appmsg_item">
                        <h4 class="appmsg_title js_title">

                          <a href="" target="_blank" data-msgid="502376591" data-idx="">转载须知</a>

                        </h4>

                        <div class="appmsg_thumb_wrp" style="background-image:url('https://mmbiz.qlogo.cn/mmbiz_jpg/g85kbfEZlSaFibFPkMXx78PSVJOruF3dxC0hO3IcB4rmIRIvl3B6Fe5LnGhqhhJl4ric1iazWX7Z3ZSunSv2TvcSg/0?wx_fmt=jpeg')">
                          <!--

                      -->
                        </div>

                        <p class="appmsg_desc">如果您对我们的文章感兴趣并有意转载，请先阅读本文。</p>

                        <a href="" class="edit_mask preview_mask js_preview" data-msgid="502376591" data-idx="">
                          <div class="edit_mask_content">
                            <p class="">
                              预览文章 </p>
                          </div>
                          <span class="vm_box"></span>
                        </a>

                      </div>

                    </div>



                  </div>
                </div>
                <p class="frm_tips">来自<span class="js_name">素材库</span><span style="display:none;"> -《<span class="js_title"></span>》</span>
                </p>
              </div>
              <div id="js_errTips" style="display:none;" class="msg_sender_msg mini_tips warn"></div>
            </div>
          </div>
        </div>
        <span class="editor_arrow_wrp">
          <i class="editor_arrow editor_arrow_out"></i>
          <i class="editor_arrow editor_arrow_in"></i>
        </span>
      </div>
    </div>

  </div>
</template>
<script>
import WxTextArea from './components/textArea.vue'
export default {
  name: 'menu',
  data: function() {
    return {
      text: '1234'
    }
  },
  components: {
    WxTextArea
  }
}
</script>
<style scoped>
*{
  -webkit-font-smoothing: antialiased;
  font-family: "Helvetica Neue","Hiragino Sans GB","Microsoft YaHei","\9ED1\4F53",Arial,sans-serif;
  font-size: 14px;
}body, h1, h2, h3, h4, h5, h6, p, ul, ol, dl, dd, fieldset, textarea {
    margin: 0;
}ul, ol {
    padding-left: 0;
    list-style-type: none;
}a {
    color: #459ae9;
    text-decoration: none;
}
.menu_setting_area {
    width: 100%;
    height: 700px;
    margin: 14px 0px 0;
}.menu_preview_area {
    float: left;
    margin-right: 12px;
    position: relative;
}.mobile_menu_preview {
    position: relative;
    width: 317px;
    height: 580px;
    background: transparent url(./img/wx_header.png) no-repeat 0 0;
    background-position: 0 0;
    border: 1px solid #e7e7eb;
}.tc {
    text-align: center;
}.mobile_menu_preview .mobile_hd {
    color: #fff;
    text-align: center;
    padding-top: 30px;
    font-size: 15px;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    margin: 0 30px;
}.menu_preview_area .pre_menu_list {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid #e7e7eb;
    background: transparent url(./img/wx_footer.png) no-repeat 0 0;
    background-position: 0 0;
    background-repeat: no-repeat;
    padding-left: 43px;
}.size1of3 {
    width: 33.33%;
}.size1of2 {
    width: 50%;
}.size1of1 {
    width: 100;
}
.pre_menu_item {
    position: relative;
    float: left;
    line-height: 38px;
    text-align: center;
}.menu_preview_area .pre_menu_item {
    line-height: 50px;
}.sub_pre_menu_box {
    position: absolute;
    bottom: 50px;
    left: 0;
    width: 100%;
    border: 1px solid #d0d0d0;
    background-color: #fff;
}.menu_preview_area .sub_pre_menu_box {
    bottom: 60px;
    background-color: #fafafa;
    border-top-width: 0;
}.pre_menu_link {
    border-left: 1px solid #e7e7eb;
}.pre_menu_item a {
    display: block;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    color: #616161;
    text-decoration: none;
}.menu_preview_area .pre_menu_item:first-child .pre_menu_link {
    border-left-width: 0;
}.dn {
    display: none;
}.pre_menu_item .icon_menu_dot {
    background: url(./img/index_z354723.png) 0 -36px no-repeat;
    width: 7px;
    height: 7px;
    vertical-align: middle;
    display: inline-block;
    margin-right: 2px;
    margin-top: -2px;
}.menu_preview_area .pre_menu_item.current .pre_menu_link {
    border: 1px solid #44b549;
    line-height: 48px;
    background-color: #fff;
    color: #44b549;
}.sub_pre_menu_box .arrow {
    position: absolute;
    left: 50%;
    margin-left: -6px;
}.sub_pre_menu_box .arrow_out {
    bottom: -6px;
    display: inline-block;
    width: 0;
    height: 0;
    border-width: 6px;
    border-style: dashed;
    border-color: transparent;
    border-bottom-width: 0;
    border-top-color: #d0d0d0;
    border-top-style: solid;
}.sub_pre_menu_box .arrow_in {
    bottom: -5px;
    display: inline-block;
    width: 0;
    height: 0;
    border-width: 6px;
    border-style: dashed;
    border-color: transparent;
    border-bottom-width: 0;
    border-top-color: #fafafa;
    border-top-style: solid;
}.sub_pre_menu_list li {
    line-height: 30px;
}.menu_preview_area .sub_pre_menu_list li {
    line-height: 44px;
    border: 1px solid transparent;
    margin: 0 -1px -1px;
}.menu_preview_area .sub_pre_menu_list li:first-child {
    border-top: 1px solid #d0d0d0;
}.pre_menu_item a {
    display: block;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    color: #616161;
    text-decoration: none;
}.sub_pre_menu_list li a {
    padding: 0 .5em;
}.menu_preview_area .sub_pre_menu_inner {
    display: block;
    border-top: 1px solid #e7e7eb;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    cursor: pointer;
}.menu_preview_area .sub_pre_menu_list li:first-child .sub_pre_menu_inner {
    border-top-width: 0;
}.menu_preview_area .icon14_menu_add {
    background: url(./img/index_z354723.png) 0 0 no-repeat;
    width: 14px;
    height: 14px;
    vertical-align: middle;
    display: inline-block;
    margin-top: -2px;
}.grid_line .no_extra.grid_item {
    float: none;
    width: auto;
    overflow: hidden;
}.grid_item {
    float: left;
}.grid_item.no_extra {
    float: none;
    width: auto;
    overflow: hidden;
}.menu_preview_area .pre_menu_item {
    line-height: 50px;
}.grid_line .no_extra.grid_item {
    float: none;
    width: auto;
    overflow: hidden;
}.menu_preview_area .sort_btn_wrp {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -72px;
    text-align: center;
}.btn {
    display: inline-block;
    overflow: visible;
    padding: 0 22px;
    height: 30px;
    line-height: 30px;
    vertical-align: middle;
    text-align: center;
    text-decoration: none;
    border-radius: 3px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    font-size: 14px;
    border-width: 1px;
    border-style: solid;
    cursor: pointer;
}.btn_default {
    background-color: #fff;
    background-image: -moz-linear-gradient(top,#fff 0,#fff 100%);
    background-image: -webkit-gradient(linear,0 0,0 100%,from(#fff),to(#fff));
    background-image: -webkit-linear-gradient(top,#fff 0,#fff 100%);
    background-image: -o-linear-gradient(top,#fff 0,#fff 100%);
    background-image: linear-gradient(to bottom,#fff 0,#fff 100%);
    border-color: #e7e7eb;
    color: #222;
}.btn {
    min-width: 60px;
}.btn:hover {
    text-decoration: none;
}.btn_default:hover {
    background-color: #e7e7eb;
    background-image: -moz-linear-gradient(top,#e7e7eb 0,#e7e7eb 100%);
    background-image: -webkit-gradient(linear,0 0,0 100%,from(#e7e7eb),to(#e7e7eb));
    background-image: -webkit-linear-gradient(top,#e7e7eb 0,#e7e7eb 100%);
    background-image: -o-linear-gradient(top,#e7e7eb 0,#e7e7eb 100%);
    background-image: linear-gradient(to bottom,#e7e7eb 0,#e7e7eb 100%);
    border-color: #dadbe0;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    color: #222;
}.menu_form_area {
    display: table-cell;
    vertical-align: top;
    float: none;
    width: 700px;
}.tips_global {
    color: #8d8d8d;
}.menu_initial_tips {
    text-align: center;
    padding-top: 200px;
}.tips_global {
    color: #8d8d8d;
}.menu_initial_tips {
    text-align: center;
    padding-top: 200px;
}.portable_editor {
    position: relative;
}.portable_editor.to_left {
    padding-left: 12px;
}.portable_editor .editor_inner {
    padding: 0 20px 5px;
    background-color: #f4f5f9;
    border: 1px solid #e7e7eb;
    border-radius: 0;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
}.menu_form_area .editor_inner {
    min-height: 560px;
    padding-bottom: 20px;
}.menu_form_hd {
    padding: 9px 0;
    border-bottom: 1px solid #e7e7eb;
}.menu_form_hd h4 {
    font-weight: 400;
}.global_mod.float_layout .global_info {
    float: left;
}.global_mod .global_extra {
    text-align: right;
}.tips_global {
    color: #8d8d8d;
}.menu_form_area .msg_sender_tips {
    padding-top: 10px;
}.frm_control_group {
    padding-bottom: 25px;
}.portable_editor .frm_control_group {
    margin-top: 30px;
    margin-bottom: 30px;
    padding-bottom: 0;
}.portable_editor .frm_control_group {
    margin-bottom: 10px;
}.frm_label {
    float: left;
    width: 5em;
    margin-top: .3em;
    margin-right: 1em;
    font-size: 14px;
}.menu_form_area .frm_label {
    width: 5em;
}.portable_editor .frm_label .title {
    font-weight: 400;
    font-style: normal;
}.frm_controls {
    display: table-cell;
    vertical-align: top;
    float: none;
    width: auto;
}.frm_input_box {
    display: inline-block;
    position: relative;
    height: 30px;
    line-height: 30px;
    vertical-align: middle;
    width: 278px;
    font-size: 14px;
    padding: 0 10px;
    border: 1px solid #e7e7eb;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    border-radius: 0;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    background-color: #fff;
}.frm_input_box.append {
    padding-right: 30px;
}.frm_input_box.counter_in {
    padding-right: 70px;
}.frm_input_box.counter_in {
    width: 228px;
    padding-right: 60px;
}input, textarea, button, a {
    outline: 0;
}fieldset, legend, textarea, input {
    padding: 0;
}button, input, select, textarea {
    font-family: inherit;
    font-size: 100%;
    margin: 0;
}textarea, input {
    color: #222;
}.frm_input, .frm_textarea {
    width: 100%;
    background-color: transparent;
    border: 0;
    outline: 0;
}.frm_input {
    height: 22px;
    margin: 4px 0;
}.title {
    padding: 0;
}.frm_tips, .frm_msg {
    padding-top: 4px;
    width: 300px;
}.frm_msg {
    display: none;
    overflow: hidden;
}.frm_msg.fail {
    color: #e15f63;
}.menu_form_area .frm_tips, .menu_form_area .frm_msg {
    width: auto;
}.frm_tips {
    color: #8d8d8d;
}.frm_control_group {
    padding-bottom: 25px;
}.portable_editor .frm_control_group {
    margin-top: 30px;
    margin-bottom: 30px;
    padding-bottom: 0;
}.portable_editor .frm_control_group {
    margin-bottom: 10px;
}.frm_label {
    float: left;
    width: 5em;
    margin-top: .3em;
    margin-right: 1em;
    font-size: 14px;
}.menu_form_area .frm_label {
    width: 5em;
}strong, b {
    font-weight: bold;
}.portable_editor .frm_label .title {
    font-weight: 400;
    font-style: normal;
}.frm_vertical_pt {
    padding-top: .3em;
}.frm_controls {
    display: table-cell;
    vertical-align: top;
    float: none;
    width: auto;
}.frm_radio_label, .frm_checkbox_label {
    display: inline-block;
    text-align: left;
    cursor: pointer;
    margin-right: 1em;
}.frm_radio {
    width: 16px;
    height: 16px;
    margin-right: 3px;
    margin-top: -4px;
    vertical-align: middle;
    display: inline-block;
}.menu_content {
    padding: 16px 20px;
    border: 1px solid #e7e7eb;
    background-color: #fff;
}.menu_content.send {
    border: 0;
    padding: 0;
}.msg_sender {
    border: 1px solid #e7e7eb;
}.msg_tab {
    background-color: #fff;
}.msg_sender .tab_navs_panel {
    overflow: hidden;
    border-bottom: 1px solid #e7e7eb;
}.msg_sender .tab_navs_wrp {
    overflow: hidden;
}.menu_form_area .msg_sender .tab_navs_wrp {
    width: 100%;
}.tab_navs {
    text-align: center;
    line-height: 30px;
    border-bottom: 1px solid #e7e7eb;
    box-shadow: inset 0 1px 0 0 rgba(255,255,255,0.5);
    -moz-box-shadow: inset 0 1px 0 0 rgba(255,255,255,0.5);
    -webkit-box-shadow: inset 0 1px 0 0 rgba(255,255,255,0.5);
}.tab_navs {
    text-align: center;
    line-height: 30px;
    border-bottom: 1px solid #e7e7eb;
    box-shadow: inset 0 1px 0 0 rgba(255,255,255,0.5);
    -moz-box-shadow: inset 0 1px 0 0 rgba(255,255,255,0.5);
    -webkit-box-shadow: inset 0 1px 0 0 rgba(255,255,255,0.5);
}.msg_sender .tab_navs {
    background-color: #fff;
    line-height: 38px;
    height: 38px;
}.msg_sender .tab_navs {
    border-top-width: 0;
}.msg_sender .tab_navs {
    white-space: nowrap;
    text-align: left;
    font-size: 0;
    border-bottom-width: 0;
}.tab_panel {
    background-color: #fff;
    min-height: 216px;
}.msg_sender .tab_panel {
    border-bottom-left-radius: 3px;
    -moz-border-radius-bottomleft: 3px;
    -webkit-border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    -moz-border-radius-bottomright: 3px;
    -webkit-border-bottom-right-radius: 3px;
}.tab_content {
    padding: 35px 30px 0;
}.msg_sender .tab_content {
    padding: 0;
}.tab_content .inner {
    border: 1px solid #c6c6c6;
    border-radius: 3px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    padding: 14px 20px;
}.msg_sender .tab_content .inner {
    border-width: 0;
}.menu_form_area .msg_sender .tab_cont_cover {
    padding: 20px;
}.tab_cont_cover .appmsg_cover, .tab_cont_cover .media_cover {
    width: 48%;
    margin-right: 2%;
    float: left;
}.menu_form_area .msg_sender .tab_cont_cover .media_cover, .menu_form_area .msg_sender .tab_cont_cover .appmsg_cover {
    width: 47%;
    margin-right: 0;
    margin-left: 5.5%;
}.menu_form_area .msg_sender .tab_cont_cover .media_cover:first-child, .menu_form_area .msg_sender .tab_cont_cover .appmsg_cover:first-child {
    margin-left: 0;
}.create_access {
    display: block;
    border: 2px dotted #d9dadc;
    line-height: 80px;
    text-align: center;
    margin-bottom: 20px;
}.tab_cont_cover .create_access {
    padding: 82px 0;
    margin-bottom: 0;
    line-height: normal;
    position: relative;
}.menu_form_area .msg_sender .tab_cont_cover .create_access {
    padding: 42px 0;
}.create_access a {
    display: none;
    vertical-align: middle;
    margin-left: 10px;
    margin-right: 10px;
    color: #8d8d8d;
    font-size: 14px;
    line-height: normal;
}.tab_cont_cover .create_access .add_gray_wrp, .tab_cont_cover .create_access_primary .add_gray_wrp {
    display: inline-block;
}.icon36_common {
    width: 36px;
    height: 36px;
    vertical-align: middle;
    display: inline-block;
}.create_access i {
    cursor: pointer;
    line-height: 300px;
    overflow: hidden;
}.icon36_common.add_gray {
    background: url(./img/base_z3560fc.png) 0 -2548px no-repeat;
}.create_access a strong {
    display: block;
    padding-top: 3px;
    font-weight: 400;
    font-style: normal;
}.create_access a strong {
    display: block;
    padding-top: 3px;
    font-weight: 400;
    font-style: normal;
}.tab_cont_cover .create_access strong {
    padding-top: 2px;
}.appmsg {
    position: relative;
    overflow: hidden;
    margin-bottom: 20px;
    border: 1px solid #e7e7eb;
    background-color: #fff;
    color: #666;
}.tab_content .appmsg {
    width: 320px;
}.msg_sender .audio_msg, .msg_sender .appmsg, .msg_sender .richvideo, .msg_sender .msg_card {
    display: inline-block;
}.msg_sender .richvideo, .msg_sender .appmsg, .msg_sender .richvideo_msg_box {
    margin-bottom: 0;
}.appmsg_content {
    position: relative;
}.appmsg_info {
    font-size: 13px;
    line-height: 20px;
    margin: 0 14px;
    padding: 12px 0;
    border-bottom: 1px solid #e7e7eb;
}.appmsg_date {
    font-weight: 400;
    font-style: normal;
}.appmsg_item {
    position: relative;
    padding: 12px 14px;
}.appmsg_title {
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    line-height: 1.6;
    max-height: 3.2;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-all;
    color: #222;
}.appmsg_title a {
    display: block;
    color: #222;
}.appmsg_thumb_wrp {
    height: 160px;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}.single .appmsg_thumb_wrp {
    margin-top: 5px;
}.appmsg_desc {
    padding: 5px 0 10px;
    word-wrap: break-word;
    word-break: break-all;
}.appmsg_item:hover .edit_mask{
  display: block;
}.edit_mask {
    display: none;
    font-size: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.6)!important;
    filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#99000000',endcolorstr = '#99000000');
    color: #fff;
    z-index: 1;
    text-align: center;
    padding: 14px;
}.edit_mask_content {
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
}.vm_box {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
}.link_dele {
    display: inline-block;
    vertical-align: bottom;
    padding-left: 10px;
    margin-bottom: 5px;
}.tab_nav {
    float: left;
    font-size: 14px;
}.tab_nav {
    float: left;
    font-size: 14px;
}.tab_nav.selected {
    background-color: #d4d5d5;
}.tab_nav.selected {
    background-color: #d4d5d5;
}.msg_sender .tab_nav {
    float: none;
    display: inline-block;
    vertical-align: top;
}.msg_sender .tab_nav.selected {
    background-color: #fff;
}.tab_nav a {
    display: block;
    text-decoration: none;
    color: #222;
    outline: 0;
    padding: 0 20px;
}.tab_nav a {
    display: block;
    text-decoration: none;
    color: #222;
    outline: 0;
    padding: 0 20px;
}.icon_msg_sender {
    margin-right: 3px;
    margin-top: -2px;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    display: inline-block;
}.tab_appmsg .icon_msg_sender {
    background: url(./img/msg_tab_z25df2d.png) 0 -240px no-repeat;
}.tab_appmsg.selected .icon_msg_sender, .tab_appmsg:hover .icon_msg_sender {
    background: url(./img/msg_tab_z25df2d.png) 0 -270px no-repeat;
}.tab_text .icon_msg_sender {
    background: url(./img/msg_tab_z25df2d.png) 0 0 no-repeat;
}.tab_img .icon_msg_sender {
    background: url(./img/msg_tab_z25df2d.png) 0 -60px no-repeat;
}.tab_audio .icon_msg_sender {
    background: url(./img/msg_tab_z25df2d.png) 0 -180px no-repeat;
}.tab_video .icon_msg_sender {
    background: url(./img/msg_tab_z25df2d.png) 0 -120px no-repeat;
}.menu_preview_area .sub_pre_menu_list li.current a {
    color: #44b549;
}.menu_preview_area .sub_pre_menu_list li:hover {
    background-color: #eee;
    border: 1px solid #d0d0d0;
    line-height: 45px;
    cursor: pointer;
}.menu_preview_area .sub_pre_menu_list li.current {
    background-color: #fff;
    border: 1px solid #44b549;
    position: relative;
    z-index: 1;
    line-height: 45px;
}
</style>
