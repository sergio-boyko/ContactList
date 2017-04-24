Ext.define('MP.view.ContactList.ContactListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.contactlist-contactlist',
    views: ['MP.view.contactList.ContactList'],
    requires: ['MP.store.ContactList'],

    onSelectionChange: function() {
      this.lookupReference('btnRemoveContact').enable();
    },

    onRemove: function() {
      var grid = this.lookupReference('contactListGrid');
      var sm = grid.getSelectionModel();

      //This line cancels the row/cell edit if it is active before we remove the item.
      grid.plugins[0].cancelEdit();

      grid.getStore().remove(sm.getSelection());
      if (grid.getStore().getCount() > 0) {
        sm.select(0);
      }
    },

    onAdd: function() {
      this.lookupReference('btnAddContact').enable();
      console.log(this.lookupReference('btnAddContact').enable());
      var grid = this.lookupReference('contactListGrid');
      grid.plugins[0].cancelEdit();

      // Create a model instance
      var r = Ext.create('MP.model.Contact');
      grid.getStore().insert(0, r);
      grid.plugins[0].startEdit(0, 0);
    }
});
