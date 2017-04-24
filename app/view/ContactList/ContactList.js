Ext.define('MP.view.ContactList.ContactList',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.contactlist',

    requires: [
        'MP.view.ContactList.ContactListController',
        'MP.view.ContactList.ContactListModel'
    ],

    controller: 'contactlist-contactlist',
    viewModel: {
        type: 'contactlist-contactlist'
    },

    items: [{
    cls: 'contact-list',

    xtype: 'grid',
    reference: 'contactListGrid',
    scrollable: true,
    autoScroll: true,
    plugins: [{
      ptype: 'rowediting',
      clicksToMoveEditor: 1,
      autoCancel: false
    }],
    listeners: {
      selectionchange: 'onSelectionChange'
    },
    flex:1,
    store: 'contactList',
    pageSize: 10,
    title: 'Company Directory',
    columns: {
      defaults: {
        editor: {
          xtype: 'textfield',
          allowBlank: false
        },
        sort: true
      },
      items: [
      {
        text: 'First Name',
        width: 100,
        dataIndex: 'firstname'
      },
      {
        text: 'Last Name',
        width: 100,
        dataIndex: 'lastname'
      },
      {
        text: 'Email',
        width: 250,
        dataIndex: 'email',
        editor: { vtype: 'email' }
      },
      {
        text: 'Address',
        width: 100,
        dataIndex: 'address'
      },
      {
        text: 'City',
        width: 100,
        dataIndex: 'city'
      },
      {
        text: 'State',
        width: 100,
        dataIndex: 'state'
      },
      {
        text: 'Type',
        width: 100,
        dataIndex: 'type'
      },
      {
        text: 'Phone Number',
        //width: 100,
        dataIndex: 'phonenumber',
        flex: 1
      },
      ]
    },
    dockedItems: [{
      xtype: 'pagingtoolbar',
      store: 'contactList',
      dock: 'bottom',
      displayInfo: true
    }, {
      xtype: 'toolbar',
      dock: 'top',
      ui: 'footer',
      defaults: { cls: 'btn-orange' },
      items: ['->', {
        text: 'Add',
        disabled: false,
        reference: 'btnAddContact',
        handler: 'onAdd'
      }, '-', {
        text: 'Remove',
        disabled: true,
        reference: 'btnRemoveContact',
        handler: 'onRemove'
      }

      ]
    }]
  } ]
});
