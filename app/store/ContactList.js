Ext.define('MP.store.ContactList', {
  extend: 'Ext.data.Store',
  storeId: 'contactList',
  model: 'MP.model.Contact',
  pageSize: 10,
  autoLoad: true,
  proxy: {
    type: 'ajax',
    url: '/MiniProject/server/data.json',
    reader: {
      type: 'json',
      rootProperty: 'data',
      totalProperty: 'total'
    }
  }
});
Ext.create('MP.store.ContactList').load();
