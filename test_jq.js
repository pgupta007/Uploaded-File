<script>
var jsonData = $.parseJSON(data);
                if(jsonData.Table != "undefined" && jsonData.Table != null && 
jsonData.Table != "")
                {
                    jsonData = jsonData.Table;  
                    $.each(jsonData, function(index, item){
                    if((item[0] != "undefined" && item[0] !=null && item[0] !="") && (item[1] != "undefined" && item[1] !=null && item[1] !=""))
                        {
                         ID = item[0];
                        }
                    });
                }
</script>