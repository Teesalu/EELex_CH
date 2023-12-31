
'Const SOMITEM_SCHEMA                    = 4*1024
'Const SOMITEM_ATTRIBUTE                 = SOMITEM_SCHEMA + 1
'Const SOMITEM_ATTRIBUTEGROUP            = SOMITEM_SCHEMA + 2
'Const SOMITEM_NOTATION                  = SOMITEM_SCHEMA + 3

'Const SOMITEM_ANYTYPE                   = 8*1024
'Const SOMITEM_DATATYPE                  = SOMITEM_ANYTYPE+256
'Const SOMITEM_SIMPLETYPE                = SOMITEM_DATATYPE+256
'Const SOMITEM_COMPLEXTYPE               = 9*1024

'Const SOMITEM_PARTICLE                  = 16*1024
'Const SOMITEM_ANY                       = SOMITEM_PARTICLE+1
'Const SOMITEM_ANYATTRIBUTE              = SOMITEM_PARTICLE+2
'Const SOMITEM_ELEMENT                   = SOMITEM_PARTICLE+3
'Const SOMITEM_GROUP                     = SOMITEM_PARTICLE+256

'Const SOMITEM_ALL                       = SOMITEM_GROUP+1
'Const SOMITEM_CHOICE                    = SOMITEM_GROUP+2
'Const SOMITEM_SEQUENCE                  = SOMITEM_GROUP+3
'Const SOMITEM_EMPTYPARTICLE             = SOMITEM_GROUP+4

'' Attribute uses
'Const SCHEMAUSE_OPTIONAL   = 0
'Const SCHEMAUSE_PROHIBITED = 1
'Const SCHEMAUSE_REQUIRED   = 2

'Const SCHEMACONTENTTYPE_EMPTY        = 0
'Const SCHEMACONTENTTYPE_TEXTONLY     = 1
'Const SCHEMACONTENTTYPE_ELEMENTONLY  = 2
'Const SCHEMACONTENTTYPE_MIXED        = 3


Const NODE_ELEMENT = 1
Const NODE_ATTRIBUTE = 2
Const NODE_TEXT = 3
Const NODE_CDATA_SECTION = 4
Const NODE_ENTITY_REFERENCE = 5
Const NODE_ENTITY = 6
Const NODE_PROCESSING_INSTRUCTION = 7
Const NODE_COMMENT = 8
Const NODE_DOCUMENT = 9
Const NODE_DOCUMENT_TYPE = 10
Const NODE_DOCUMENT_FRAGMENT = 11
Const NODE_NOTATION = 12
'
Const SOMITEM_ATTRIBUTE = 4097
Const SOMITEM_ANYTYPE = 8192 '0x2000 // also type mask
Const SOMITEM_DATATYPE = 8448 '0x2100 // built-in type mask
Const SOMITEM_DATATYPE_BOOLEAN = 8452
Const SOMITEM_DATATYPE_DATETIME = 8455
Const SOMITEM_DATATYPE_DECIMAL = 8457
Const SOMITEM_DATATYPE_POSITIVEINTEGER = 8482
Const SOMITEM_DATATYPE_UNSIGNEDBYTE = 8488
Const SOMITEM_DATATYPE_STRING = 8485
Const SOMITEM_DATATYPE_LANGUAGE = 8469
Const SOMITEM_SIMPLETYPE = 8704
Const SOMITEM_COMPLEXTYPE = 9216
Const SOMITEM_PARTICLE = 16384 '// particle mask
Const SOMITEM_ANY = 16385
Const SOMITEM_ANYATTRIBUTE = 16386
Const SOMITEM_ELEMENT = 16387
Const SOMITEM_GROUP = 16640 '// group mask
Const SOMITEM_ALL = 16641
Const SOMITEM_CHOICE = 16642
Const SOMITEM_SEQUENCE = 16643
Const SOMITEM_EMPTYPARTICLE = 16644
'
Const SCHEMAUSE_OPTIONAL = 0
Const SCHEMAUSE_PROHIBITED = 1
Const SCHEMAUSE_REQUIRED = 2
'
Const SCHEMADERIVATIONMETHOD_EMPTY = 0
Const SCHEMADERIVATIONMETHOD_SUBSTITUTION = 1
Const SCHEMADERIVATIONMETHOD_EXTENSION = 2
Const SCHEMADERIVATIONMETHOD_RESTRICTION = 4
Const SCHEMADERIVATIONMETHOD_LIST = 8
Const SCHEMADERIVATIONMETHOD_UNION = 16
Const SCHEMADERIVATIONMETHOD_ALL = 255
Const SCHEMADERIVATIONMETHOD_NONE = 256
'
Const SCHEMACONTENTTYPE_EMPTY = 0
Const SCHEMACONTENTTYPE_TEXTONLY = 1
Const SCHEMACONTENTTYPE_ELEMENTONLY = 2
Const SCHEMACONTENTTYPE_MIXED = 3
'
'SCHEMAPROCESSCONTENTS Enumerations
'Used by the processContents property of the ISchemaAny interface.
Const SCHEMAPROCESSCONTENTS_NONE = 0
Const SCHEMAPROCESSCONTENTS_SKIP = 1
Const SCHEMAPROCESSCONTENTS_LAX = 2
Const SCHEMAPROCESSCONTENTS_STRICT = 3
'
Const NS_XML = "http://www.w3.org/XML/1998/namespace"
Const NS_XSI = "http://www.w3.org/2001/XMLSchema-instance"
Const NS_XS = "http://www.w3.org/2001/XMLSchema"
Const NS_XS_PR = "xs"
Const NS_XSL = "http://www.w3.org/1999/XSL/Transform"
Const NS_XSL_PR = "xsl"
'
Const SDPR = "pr_sd"
Const SDURI = "http://www.eo.ee/dev/xml/names"
