<<<<<<< HEAD
var deleteByid = function(id, url, pageindex, errorMessage) {
	$.jq_Confirm( {
		message : "确定要删除吗?",
		btnOkClick : function() {
			$.ajax( {
				url : url,
				data : {
					id : id
				},
				success : function(e) {
					if (e > 0) {
						$.jq_Alert( {
							message:"删除成功"
						});
						if (pageindex != undefined) {
							loadData(pageindex);
						} else {
							loadData();
						}
					} else if (e == -2) {
						$.jq_Alert( {
							message : errorMessage
						});
					}
				}
			});
		}
	});
}
=======
var deleteByid = function(id, url, pageindex, errorMessage) {
	$.jq_Confirm( {
		message : "确定要删除吗?",
		btnOkClick : function() {
			$.ajax( {
				url : url,
				data : {
					id : id
				},
				success : function(e) {
					if (e > 0) {
						$.jq_Alert( {
							message:"删除成功"
						});
						if (pageindex != undefined) {
							loadData(pageindex);
						} else {
							loadData();
						}
					} else if (e == -2) {
						$.jq_Alert( {
							message : errorMessage
						});
					}
				}
			});
		}
	});
}
>>>>>>> 3f9b8b4ea3381f93cd7a97d8466129efa33ed9ba
