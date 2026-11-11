    var fm_currentDate = new Date();
    var FormCurrency_1 = '$';
    var FormPaypalTax_1 = '0';
    var check_submit1 = 0;
    var check_before_submit1 = {};
    var required_fields1 = ["2","3","4","5","6"];
    var labels_and_ids1 = {"2":"type_text","3":"type_submitter_mail","4":"type_text","8":"type_date_new","7":"type_date_new","5":"type_textarea","6":"type_captcha","1":"type_submit_reset"};
    var check_regExp_all1 = [];
    var check_paypal_price_min_max1 = [];
    var file_upload_check1 = [];
    var spinner_check1 = [];
    var scrollbox_trigger_point1 = '20';
    var header_image_animation1 = 'none';
    var scrollbox_loading_delay1 = '0';
    var scrollbox_auto_hide1 = '1';
    var inputIds1 = '[]';
        var update_first_field_id1 = 0;
    var form_view_count1 = 0;
    // Occurs before the form is loaded
function before_load1() {

}

// Occurs just before submitting  the form
function before_submit1() {
  // IMPORTANT! If you want to interrupt (stop) the submitting of the form, this function should return true. You don't need to return any value if you don't want to stop the submission.
}

// Occurs just before resetting the form
function before_reset1() {

}
// Occurs after form is submitted and reloaded
function after_submit1() {

}
    function get_adress_fields_ids( that ) {
      var id = jQuery(that).attr("wdid");
      var disabled = [];
      /* This is the case when the address field is completely closed by condition. */
      if ( jQuery(that).css('display') == 'none' ) {
        for (var i = 0; i <= 5; i++) {
          var name = jQuery(that).find(".wdform_" + id + "_address_" + i).attr("name");
          if (typeof name !== "undefined") {
            var temp = name.split("_");
            disabled.push(temp[1]);
          }
        }
      }
     /* This is the case when the fields in the address are closed with a condition. */
      else {
        for (var i = 0; i <= 5; i++) {
          var field = jQuery(that).find(".wdform_" + id + "_address_" + i);
          if( field.parent().css('display') == 'none' ) {
            var name = field.attr("name");
            if (typeof name !== "undefined") {
              var temp = name.split("_");
              disabled.push(temp[1]);
            }
          }
        }
      }
      return disabled;
    }


    function onload_js1() {
  jQuery("#button_calendar_8, #fm-calendar-8").click(function() {
    jQuery("#wdform_8_element1").datepicker("show");
  }); 
  jQuery("#wdform_8_element1").datepicker({
    dateFormat: "mm/dd/yy",
    minDate: "",
    maxDate: "",
    changeMonth: true,
    changeYear: true,
    yearRange: "-100:+50",
    showOtherMonths: true,
    selectOtherMonths: true,
    firstDay: "0",
    beforeShow: function(input, inst) {
      jQuery("#ui-datepicker-div").addClass("fm_datepicker");
    },
    beforeShowDay: function(date) {
      var invalid_dates = "";
      var invalid_dates_finish = [];
      var invalid_dates_start = invalid_dates.split(",");
      var invalid_date_range =[];
      for(var i = 0; i < invalid_dates_start.length; i++ ) {
        invalid_dates_start[i] = invalid_dates_start[i].trim();
        if(invalid_dates_start[i].length < 11 || invalid_dates_start[i].indexOf("-") == -1){
          invalid_dates_finish.push(invalid_dates_start[i]);
        }
        else{
          if(invalid_dates_start[i].indexOf("-") > 4) {
            invalid_date_range.push(invalid_dates_start[i].split("-"));
          }
          else {
            var invalid_date_array = invalid_dates_start[i].split("-");
            var start_invalid_day = invalid_date_array[0] + "-" + invalid_date_array[1] + "-" + invalid_date_array[2];
            var end_invalid_day = invalid_date_array[3] + "-" + invalid_date_array[4] + "-" + invalid_date_array[5];
            invalid_date_range.push([start_invalid_day, end_invalid_day]);
          }
        }
      }
      jQuery.each(invalid_date_range, function( index, value ) {
        for(var d = new Date(value[0]); d <= new Date(value[1]); d.setDate(d.getDate() + 1)) {
          invalid_dates_finish.push(jQuery.datepicker.formatDate("mm/dd/yy", d));
        }
      });
      var string_days = jQuery.datepicker.formatDate("mm/dd/yy", date);
      var day = date.getDay();
      return [ invalid_dates_finish.indexOf(string_days) == -1 ];
    }
  });
  var default_date;
  var date_value = jQuery("#wdform_8_element1").val();
  (date_value != "") ? default_date = date_value : default_date = "";
  jQuery("#wdform_8_element1").datepicker("option", "dateFormat", "mm/dd/yy");
  if(default_date == "today") {
    jQuery("#wdform_8_element1").datepicker("setDate", new Date());
  }
  else if (default_date.indexOf("d") == -1 && default_date.indexOf("m") == -1 && default_date.indexOf("y") == -1 && default_date.indexOf("w") == -1) {
    jQuery("#wdform_8_element1").datepicker("setDate", default_date);
  }
  else {
    jQuery("#wdform_8_element1").datepicker("setDate", default_date);
  }
  jQuery("#button_calendar_7, #fm-calendar-7").click(function() {
    jQuery("#wdform_7_element1").datepicker("show");
  }); 
  jQuery("#wdform_7_element1").datepicker({
    dateFormat: "mm/dd/yy",
    minDate: "",
    maxDate: "",
    changeMonth: true,
    changeYear: true,
    yearRange: "-100:+50",
    showOtherMonths: true,
    selectOtherMonths: true,
    firstDay: "0",
    beforeShow: function(input, inst) {
      jQuery("#ui-datepicker-div").addClass("fm_datepicker");
    },
    beforeShowDay: function(date) {
      var invalid_dates = "";
      var invalid_dates_finish = [];
      var invalid_dates_start = invalid_dates.split(",");
      var invalid_date_range =[];
      for(var i = 0; i < invalid_dates_start.length; i++ ) {
        invalid_dates_start[i] = invalid_dates_start[i].trim();
        if(invalid_dates_start[i].length < 11 || invalid_dates_start[i].indexOf("-") == -1){
          invalid_dates_finish.push(invalid_dates_start[i]);
        }
        else{
          if(invalid_dates_start[i].indexOf("-") > 4) {
            invalid_date_range.push(invalid_dates_start[i].split("-"));
          }
          else {
            var invalid_date_array = invalid_dates_start[i].split("-");
            var start_invalid_day = invalid_date_array[0] + "-" + invalid_date_array[1] + "-" + invalid_date_array[2];
            var end_invalid_day = invalid_date_array[3] + "-" + invalid_date_array[4] + "-" + invalid_date_array[5];
            invalid_date_range.push([start_invalid_day, end_invalid_day]);
          }
        }
      }
      jQuery.each(invalid_date_range, function( index, value ) {
        for(var d = new Date(value[0]); d <= new Date(value[1]); d.setDate(d.getDate() + 1)) {
          invalid_dates_finish.push(jQuery.datepicker.formatDate("mm/dd/yy", d));
        }
      });
      var string_days = jQuery.datepicker.formatDate("mm/dd/yy", date);
      var day = date.getDay();
      return [ invalid_dates_finish.indexOf(string_days) == -1 ];
    }
  });
  var default_date;
  var date_value = jQuery("#wdform_7_element1").val();
  (date_value != "") ? default_date = date_value : default_date = "";
  jQuery("#wdform_7_element1").datepicker("option", "dateFormat", "mm/dd/yy");
  if(default_date == "today") {
    jQuery("#wdform_7_element1").datepicker("setDate", new Date());
  }
  else if (default_date.indexOf("d") == -1 && default_date.indexOf("m") == -1 && default_date.indexOf("y") == -1 && default_date.indexOf("w") == -1) {
    jQuery("#wdform_7_element1").datepicker("setDate", default_date);
  }
  else {
    jQuery("#wdform_7_element1").datepicker("setDate", default_date);
  }
  jQuery("#wd_captcha1").click(function() {captcha_refresh("wd_captcha","1")});
  jQuery("#_element_refresh1").click(function() {captcha_refresh("wd_captcha","1")});
  captcha_refresh("wd_captcha", "1");    }

    function condition_js1() {    }

    function check_js1(id, form_id) {
      if (id != 0) {
        x = jQuery("#" + form_id + "form_view"+id);
      }
      else {
        x = jQuery("#form"+form_id);
      }
          }

    function onsubmit_js1() {
      
    var disabled_fields = "";
    jQuery("#form1 div[wdid]").each(function() {
      if(jQuery(this).css("display") == "none") {
      
          if( jQuery(this).children().first().attr("type") === "type_address" ) {
              var ids = get_adress_fields_ids( this );
              if( ids.length > 0 ) {
                disabled_fields += ids.join(",");
                disabled_fields += ",";
              }
          } else {
              disabled_fields += jQuery(this).attr("wdid");
              disabled_fields += ",";
          }
      } else if( jQuery(this).children().first().attr("type") === "type_address" ) {
          var ids = get_adress_fields_ids( this );
          if( ids.length > 0 ) {
            disabled_fields += ids.join(",");
            disabled_fields += ",";
          }
      }
    })
    if(disabled_fields) {
      jQuery("<input type=\"hidden\" name=\"disabled_fields1\" value =\""+disabled_fields+"\" />").appendTo("#form1");
    };    }

    function unset_fields1( values, id, i ) {
      rid = 0;
      if ( i > 0 ) {
        jQuery.each( values, function( k, v ) {
          if ( id == k.split('|')[2] ) {
            rid = k.split('|')[0];
            values[k] = '';
          }
        });
        return unset_fields1(values, rid, i - 1);
      }
      else {
        return values;
      }
    }

    function ajax_similarity1( obj, changing_field_id ) {
      jQuery.ajax({
        type: "POST",
        url: fm_objectL10n.form_maker_admin_ajax,
        dataType: "json",
        data: {
          nonce: fm_ajax.ajaxnonce,
          action: 'fm_reload_input',
          page: 'form_maker',
          form_id: 1,
          inputs: obj.inputs
        },
        beforeSend: function() {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              if ( val != '' && parseInt(wdid) == parseInt(changing_field_id) ) {
                jQuery("#form1 div[wdid='"+ wdid +"']").append( '<div class="fm-loading"></div>' );
              }
            });
          }
        },
        success: function (res) {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              jQuery("#form1 div[wdid='"+ wdid +"'] .fm-loading").remove();
              if ( !jQuery.isEmptyObject(res[wdid]) && ( !val || parseInt(wdid) == parseInt(changing_field_id) ) ) {
                jQuery("#form1 div[wdid='"+ wdid +"']").html( res[wdid].html );
              }
            });
          }
        },
        complete: function() {
        }
      });
    }

    function fm_script_ready1() {
      if (jQuery('#form1 .wdform_section').length > 0) {
        fm_document_ready( 1 );
      }
      else {
        jQuery("#form1").closest(".fm-form-container").removeAttr("style")
      }
      if (jQuery('#form1 .wdform_section').length > 0) {
        formOnload(1);
      }
      var ajaxObj1 = {};
      var value_ids1 = {};
      jQuery.each( jQuery.parseJSON( inputIds1 ), function( key, values ) {
        jQuery.each( values, function( index, input_id ) {
          tagName =  jQuery('#form1 [id^="wdform_'+ input_id +'_elemen"]').attr("tagName");
          type =  jQuery('#form1 [id^="wdform_'+ input_id +'_elemen"]').attr("type");
          if ( tagName == 'INPUT' ) {
            input_value = jQuery('#form1 [id^="wdform_'+ input_id +'_elemen"]').val();
            if ( jQuery('#form1 [id^="wdform_'+ input_id +'_elemen"]').is(':checked') ) {
              if ( input_value ) {
                value_ids1[key + '|' + input_id] = input_value;
              }
            }
            else if ( type == 'text' ) {
              if ( input_value ) {
                value_ids1[key + '|' + input_id] = input_value;
              }
            }
          }
          else if ( tagName == 'SELECT' ) {
            select_value = jQuery('#form1 [id^="wdform_'+ input_id +'_elemen"] option:selected').val();
            if ( select_value ) {
              value_ids1[key + '|' + input_id] = select_value;
            }
          }
          ajaxObj1.inputs = value_ids1;
          jQuery(document).on('change', '#form1 [id^="wdform_'+ input_id +'_elemen"]', function() {
          var id = '';
          var changing_field_id = '';
          if( jQuery(this).attr("tagName") == 'INPUT' ) {
            if( jQuery(this).is(':checked') ) {
              id = jQuery(this).val();
            }
            if( jQuery(this).attr('type') == 'text' ) {
              id = jQuery(this).val();
            }
          }
          else {
            id = jQuery(this).val();
          }
          value_ids1[key + '|' + input_id] = id;
          jQuery.each( value_ids1, function( k, v ) {
            key_arr = k.split('|');
            if ( input_id == key_arr[2] ) {
              changing_field_id = key_arr[0];
              count = Object.keys(value_ids1).length;
              value_ids1 = unset_fields1( value_ids1, changing_field_id, count );
            }
          });
          ajaxObj1.inputs = value_ids1;
          ajax_similarity1( ajaxObj1, changing_field_id );
          });
        });
      });
      if ( update_first_field_id1 && !jQuery.isEmptyObject(ajaxObj1.inputs) ) {
        ajax_similarity1( ajaxObj1, update_first_field_id1 );
      }
      form_load_actions();
      	  }
    jQuery(function () {
      fm_script_ready1();
    });
        