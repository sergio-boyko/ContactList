
Ext.define('MP.view.main.Main',{
    extend: 'Ext.panel.Panel',

    requires: [
        'MP.view.main.MainController',
        'MP.view.main.MainModel'
    ],

    controller: 'main-main',
    viewModel: {
        type: 'main-main'
    },
    layout: 'fit',
    items: [
      {
        xtype: 'contactlist'
      }
    ]
});
