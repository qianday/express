Ext.define('journal.view.JournalEdit', {
	extend : 'Ext.window.Window',
	alias : 'widget.journalEdit',
	title : '编辑财务信息',
	layout : 'fit',
	autoShow : true,
	initComponent : function() {
		this.items = [ {
			xtype : 'form',
			height : 300,
			width : 300,
			border : false,
			items : [ {
				xtype : 'textfield',
				name : 'logId',
				fieldLabel : '工号'
			}, {
				xtype : 'textfield',
				name : 'userId',
				fieldLabel : '姓名'
			}, {
				xtype : 'textfield',
				name : 'moduleName',
				fieldLabel : '模块'
			}, {
				xtype : 'textfield',
				name : 'operate',
				fieldLabel : '操作'
			}]
		} ];
		this.buttons = [ {
			text : '保存',
			action : 'save'
		}, {
			text : '取消',
			scope : this,
			handler : this.close
		} ];
		this.callParent(arguments);
	}
});
