'use strict';

function _updateTitile ( url, dirty ) {
    if ( !url ) {
        url = 'Untitled';
    }

    let dirtyMark = dirty ? '*' : '';
    let editorWin = Editor.Panel.findWindow('code-editor.panel');
    editorWin.nativeWin.setTitle(
      `Code Editor - ${url}${dirtyMark}`
    );
}

module.exports = {
  load () {
  },

  unload () {
    Editor.Panel.close('code-editor.panel');
  },

  messages: {
    'open-by-uuid' ( event, uuid ) {
      let url = Editor.assetdb.uuidToUrl( uuid );
      let path = Editor.assetdb.uuidToFspath( uuid );

      Editor.Panel.open('code-editor.panel', {
        url: url,
        path: path,
        uuid: uuid
      });

      _updateTitile( url, false );
    },

    'update-title' ( event, url, dirty ) {
      _updateTitile(url, dirty);
    },
  }
};
