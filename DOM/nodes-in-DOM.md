# Node Types
(1) ELEMENT_NODE
An Element node like <p> or <div>

(2) ATTRIBUTE_NODE
An Attribute node of an Element (Eg: id, class)

(3) TEXT_NODE
A Text node inside an Element or Attr

(8) COMMENT_NODE
A Comment node (Eg: <!-- hi -->)

(9) DOCUMENT_NODE
A Document node (Eg: window.document)

(10) DOCUMENT_TYPE_NODE
A DocumentType node (Eg: <!DOCTYPE html>)

(11) DOCUMENT_FRAGMENT_NODE
A DocumentFragment node

<br><br>


## Prototype chain

|-- Event target <br>
&ensp;|- Node <br>
&ensp; &ensp;  |- DocumentFragment <br>
 &ensp; &ensp; |- Attribute <br>
 &ensp; &ensp;   |- DocumentType <br>
   &ensp; &ensp;  |- Document <br>
     &ensp; &ensp;  |-Character <br>
      &ensp; &ensp; &ensp; |- comment <br>
      &ensp; &ensp; &ensp; |- Text <br>
&ensp;|- Element <br>
&ensp;|- HTMLElement <br>
&ensp;&ensp; |- HTML paragraph Element <br>
&ensp;&ensp; |- HTML input Element <br>
&ensp;&ensp; |- HTML ... Element <br>