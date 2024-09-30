define({"1337":{i:8.31343695889431E-05,u:"../Content/Topics/EIEs - Remote Devices/Modbus Omni EIE FMS Hist Data Groups.htm",a:"FMS History Data Groups FMS history data groups are used to send historical data to FMS.  Multiple instances of an FmsHist data group in a device template file are possible. They get their data from one or more Enron history data groups (that is, data groups where  dgCat=\"enronHistory\" ). At least ...",t:"Modbus Omni EIE – FMS History Data Groups"},"1338":{i:8.31343695889431E-05,u:"../Content/Topics/EIEs - Remote Devices/Modbus Omni EIE FMS Product Data Group.htm",a:"FMS Product Data Group The \"FMS Liquid Product\" data group is used to send liquid product data to FMS. The \"FMS Liquid Product\" data group depends on one or more support data groups for its data. Support data groups are found in the supportDg element of your sample template. The template file ...",t:"Modbus EFM EIE – FMS Product Data Group"},"1339":{i:8.31343695889431E-05,u:"../Content/Topics/EIEs - Remote Devices/Modbus Omni EIE Ordinalized Data Group.htm",a:"Ordinalized Data Group Modbus devices support two kinds of ordinalized data groups. See the following subsections for more information: Data Group Ordinals and Blocks Data Group Ordinals and Register Ordinals Data Group Ordinals and Blocks Blocks must be defined for every valid data group ordinal. ...",t:"Modbus Omni EIE – Ordinalized Data Group"},"1340":{i:8.31343695889431E-05,u:"../Content/Topics/EIEs - Remote Devices/Modbus Omni EIE Read Exception Status Data Group.htm",a:"Read Exception Status Data Group The \"Read Exception Status\" (ExStatus) data group uses function code 7 to read the contents of eight Exception Status outputs in a remote device, using the protocol described in the Modbus specification. The function provides a simple method for accessing this ...",t:"Modbus EFM EIE – Read Exception Status Data Group"},"1341":{i:8.31343695889431E-05,u:"../Content/Topics/EIEs - Remote Devices/Modbus Omni EIE Single-Element Data Group.htm",a:"Single-Element Data Group Single-element data groups enable you to read from and write to a single user-specified parameter, point, item, or register (or coil), depending on remote device type. Sometimes such data groups are identified in a device template file using the attribute  dgCat  and other ...",t:"Modbus Omni EIE – Single-Element Data Group"},"1342":{i:0.000131755255602501,u:"../Content/Topics/EIEs - Remote Devices/Modbus Omni History Retrieval Optimization.htm",a:"History Retrieval Optimization This EIE provides multiple methods to retrieve historical data, at least one of which is optimized. The non-optimized way to retrieve historical data uses static parameters like start date, end date, and index to define data retrieval. The number of messages retrieved ...",t:"Modbus Omni EIE – History Retrieval Optimization"},"1343":{i:0.000181307118493961,u:"../Content/Topics/EIEs - Remote Devices/Modbus Realflo EIE.htm",a:"The Modbus Realflo EIE works with a number of versions of Realflo embedded software. It supports connectivity to Modbus RTUs using the standard Gould/Modicon Modbus protocol. It also supports Enron Modbus extensions, like those for Enron events and history.  The Modbus Realflo EIE only has access to ...",t:"Modbus Realflo EIE"},"1344":{i:0.000207657276777506,u:"../Content/Topics/EIEs - Remote Devices/Modbus Realflo Device Page Properties.htm",a:" Editor – Device Page Use the Device page to view, select, and modify general device settings for a remote device. These settings are the minimum required for remote device functionality. The Device page of a remote device editor typically contains settings unique to its field device type(s) or to ...",t:"Modbus Realflo EIE – Device Page"},"1345":{i:0.000305447599195444,u:"../Content/Topics/EIEs - Remote Devices/Modbus Realflo EIE Data Group Usage Notes.htm",a:"Data Groups With few exceptions, data groups must be defined in a device template file in order for them to be available for use on a remote device. Which data groups are defined by a device template file depends on protocol, device type, and unique configuration. CygNet distributes sample device ...",t:"Modbus Realflo EIE – Data Groups"},"1346":{i:9.46488448567306E-05,u:"../Content/Topics/EIEs - Remote Devices/Modbus Realflo UIS Command Component Parameters.htm",a:"UIS Command Component Parameters The following tables list and describe the parameters specific to the UIS command component types for this remote device: CYUPDTPT CYWAITPT DG_F_DEV DG_T_DEV For more general information about UIS command component parameters, see  UIS Command Components . The ...",t:"Modbus Realflo – UIS Command Component Parameters"},"1347":{i:0.000110656446811302,u:"../Content/Topics/EIEs - Remote Devices/Modbus Realflo EIE Editing a Template.htm",a:"Editing a Template This topic provides information about editing a Realflo template. It includes information that is general to editing a device template file, but it uses Realflo-specific situations that you might encounter. For example,  you might need information that helps you support certain ...",t:"Modbus Realflo EIE – Editing a Template"},"1348":{i:9.18447444532701E-05,u:"../Content/Topics/EIEs - Remote Devices/Modbus Realflo EIE Composite Data Group.htm",a:"Composite Data Group The composite data group is a special kind of data group that enables you to combine any data group element(s) from any data group(s) as long as they are in the same template as the composite data group. The composite data group is made up of a combination of support data group ...",t:"Modbus Realflo EIE – Composite Data Group"},"1349":{i:9.18447444532701E-05,u:"../Content/Topics/EIEs - Remote Devices/Modbus Realflo EIE Configurable Data Group.htm",a:"Configurable Data Group A \"Configurable Data Group\" provides a flexible way to create register-based data groups on a per-device basis by using the remote device editor. You can use such data groups in one-off scenarios like testing or, if the data group definition is more broadly useful, paste its ...",t:"Modbus Realflo EIE – Configurable Data Group"},"1350":{i:7.45358799406202E-05,u:"../Content/Topics/EIEs - Remote Devices/Modbus Realflo EIE Enron Events Data Group.htm",a:"Enron Events Data Group The \"Enron Events\" (EnrEvents) data group is used to read events from a field device using the protocol described in the Enron Modbus specification. This data group is typically the source of event and alarm data for FMS. The \"Enron Events\" data group\u0027s names are not ...",t:"Modbus Realflo EIE – Enron Events Data Group"},"1351":{i:0.000144494327997063,u:"../Content/Topics/EIEs - Remote Devices/Modbus Realflo Enron History Data Groups.htm",a:"Enron History Data Groups Enron history data groups are used to read historical data from a field device using the protocol described in the Enron Modbus specification. Enron history data group names are not constrained, but the dgCat attribute must be set to enronHistory in order to properly define ...",t:"Modbus Realflo EIE – Enron History Data Groups"},"1352":{i:9.18447444532701E-05,u:"../Content/Topics/EIEs - Remote Devices/Modbus Realflo EIE FMS Alarms Data Group.htm",a:"FMS Alarms Data Group The \"FMS Alarms\" (FmsAlarm) data group is used to send alarm data to FMS. It gets its data from the \"Enron Events\" (EnrEvents) support data group, which is a hard-coded support data group. Alarms are identified by field-device register numbers. A register number can resolve to ...",t:"Modbus Realflo EIE – FMS Alarms Data Group"},"1353":{i:9.18447444532701E-05,u:"../Content/Topics/EIEs - Remote Devices/Modbus Realflo EIE FMS Batch Data Group.htm",a:"FMS Batch Data Group The \"FMS Batch\" data group is used to send batch data to FMS. The \"FMS Batch\" data group depends on one or more support data groups for its data. Support data groups are found in the supportDg element of your sample template. Mapping between \"FMS Batch\" data group elements and ...",t:"Modbus Realflo EIE – FMS Batch Data Group"},"1354":{i:9.18447444532701E-05,u:"../Content/Topics/EIEs - Remote Devices/Modbus Realflo EIE FMS Config Data Group.htm",a:"FMS Configuration Data Group The \"FMS Configuration\" (FmsConfig) data group is used to bi-directionally transfer meter configuration  between a field device and FMS. The \"FMS Configuration\" data group depends on one or more support data groups for its data. Support data groups are found in the ...",t:"Modbus Realflo EIE – FMS Configuration Data Group"},"1355":{i:9.18447444532701E-05,u:"../Content/Topics/EIEs - Remote Devices/Modbus Realflo EIE FMS Events Data Group.htm",a:"The \"FMS Events\" (FmsEvent) data group is used to send event data to the FMS. It gets its data from the \"Enron Events\" (EnrEvents) support data group. Events are identified by field device register numbers. A register number may resolve to an FMS item for a specific meter run or for the field device ...",t:"FMS Events Data Group"},"1356":{i:9.18447444532701E-05,u:"../Content/Topics/EIEs - Remote Devices/Modbus Realflo EIE FMS Hist Data Groups.htm",a:"FMS History Data Groups FMS history data groups are used to send historical data to FMS.  Multiple instances of an FmsHist data group in a device template file are possible. They get their data from one or more Enron history data groups (that is, data groups where  dgCat=\"enronHistory\" ). At least ...",t:"Modbus Realflo EIE –  FMS History Data Groups"},"1357":{i:9.18447444532701E-05,u:"../Content/Topics/EIEs - Remote Devices/Modbus Realflo EIE FMS Product Data Group.htm",a:"FMS Product Data Group The \"FMS Liquid Product\" data group is used to send liquid product data to FMS. The \"FMS Liquid Product\" data group depends on one or more support data groups for its data. Support data groups are found in the supportDg element of your sample template. The template file ...",t:"Modbus Realflo EIE – FMS Product Data Group"},"1358":{i:9.18447444532701E-05,u:"../Content/Topics/EIEs - Remote Devices/Modbus Realflo EIE Meter Config Mapping.htm",a:"Meter Configuration Mapping This topic correlates supported meter run types with their respective configuration data groups and input data groups. While the tables provide a \"complete\" picture of the applicable data groups for a given run type, you might not need to poll all input data groups; you ...",t:"Modbus Realflo EIE – Meter Configuration Mapping"},"1359":{i:7.45358799406202E-05,u:"../Content/Topics/EIEs - Remote Devices/Modbus Realflo EIE Ordinalized Data Group.htm",a:"Ordinalized Data Group Modbus devices support two kinds of ordinalized data groups. See the following subsections for more information: Data Group Ordinals and Blocks Data Group Ordinals and Register Ordinals Data Group Ordinals and Blocks Blocks must be defined for every valid data group ordinal. ...",t:"Modbus Realflo EIE – Ordinalized Data Group"},"1360":{i:9.18447444532701E-05,u:"../Content/Topics/EIEs - Remote Devices/Modbus Realflo EIE Read Exception Status Data Group.htm",a:"Read Exception Status Data Group The \"Read Exception Status\" (ExStatus) data group uses function code 7 to read the contents of eight Exception Status outputs in a remote device, using the protocol described in the Modbus specification. The function provides a simple method for accessing this ...",t:"Modbus Realflo EIE – Read Exception Status Data Group"},"1361":{i:9.18447444532701E-05,u:"../Content/Topics/EIEs - Remote Devices/Modbus Realflo EIE Single-Element Data Group.htm",a:"Single-Element Data Group Single-element data groups enable you to read from and write to a single user-specified parameter, point, item, or register (or coil), depending on remote device type. Sometimes such data groups are identified in a device template file using the attribute  dgCat  and other ...",t:"Modbus Realflo EIE – Single-Element Data Group"},"1362":{i:0.000164607292913174,u:"../Content/Topics/EIEs - Remote Devices/Modbus Realflo History Retrieval Optimization.htm",a:"History Retrieval Optimization This EIE provides multiple methods to retrieve historical data, at least one of which is optimized. The non-optimized way to retrieve historical data uses static parameters like start date, end date, and index to define data retrieval. The number of messages retrieved ...",t:"Modbus Realflo EIE – History Retrieval Optimization"},"1363":{i:9.28498514091559E-05,u:"../Content/Topics/EIEs - Remote Devices/NuFlo EIE.htm",a:"The NuFlo EIE is based on the Modbus protocol that includes FMS Legacy support. Specifications The following table lists and describes EIE specifications. Manufacturer NuFlo Measurement Systems Protocol(s) Modbus Model(s) NuFlo ECR Required Files CxDdsNuFloEditors.dll UisNuFloDeviceDriver.dll Sample ...",t:"NuFlo EIE"},"1364":{i:8.29817498222463E-05,u:"../Content/Topics/EIEs - Remote Devices/NuFlo Device Page Properties.htm",a:"Editor – Device Page Use the Device page to view, select, and modify general device settings for a remote device. These settings are the minimum required for remote device functionality. The Device page of a remote device editor typically contains settings unique to its field device type(s) or to ...",t:"NuFlo EIE – Device Page"},"1365":{i:0.000138517841544876,u:"../Content/Topics/EIEs - Remote Devices/NuFlo Data Group Usage Notes.htm",a:"Data Groups With few exceptions, data groups must be defined in a device template file in order for them to be available for use on a remote device. Which data groups are defined by a device template file depends on protocol, device type, and unique configuration. CygNet distributes sample device ...",t:"NuFlo EIE – Data Groups"},"1366":{i:0.000115788680083169,u:"../Content/Topics/EIEs - Remote Devices/NuFlo UIS Command Component Parameters.htm",a:"UIS Command Component Parameters The following tables list and describe the parameters specific to the UIS command component types for this remote device: CYUPDTPT CYWAITPT DG_F_DEV DG_T_DEV For more general information about UIS command component parameters, see  UIS Command Components . The ...",t:"NuFlo EIE – UIS Command Component Parameters"},"1367":{i:0.000182977879245318,u:"../Content/Topics/EIEs - Remote Devices/OPC EIE.htm",a:"The OPC EIE supports controllers whose data is maintained by an OPC server. The OPC EIE uses the OPC Comm device to communicate with an OPC server. OPC is a client/server technology. One application acts as the server providing data, and the other acts as a client using data. The CygNet OPC EIE acts ...",t:"OPC EIE"},"1368":{i:8.85744392911972E-05,u:"../Content/Topics/EIEs - Remote Devices/OPC Device Page Properties.htm",a:"Editor – Device Page Use the Device page to view, select, and modify general device settings for a remote device. These settings are the minimum required for remote device functionality. The Device page of a remote device editor typically contains settings unique to its field device type(s) or to ...",t:"OPC EIE – Device Page"},"1369":{i:0.000404032005261784,u:"../Content/Topics/EIEs - Remote Devices/OPC Data Group Usage Notes.htm",a:"Data Groups With few exceptions, data groups must be defined in a device template file in order for them to be available for use on a remote device. Which data groups are defined by a device template file depends on protocol, device type, and unique configuration. CygNet distributes sample device ...",t:"OPC EIE – Data Groups"},"1370":{i:0.000233294324051773,u:"../Content/Topics/EIEs - Remote Devices/OPC UIS Command Component Parameters.htm",a:"UIS Command Component Parameters The following tables list and describe the parameters specific to the UIS command component types for this remote device: CYUPDTPT CYWAITPT DG_F_DEV DG_T_DEV For more general information about UIS command component parameters, see  UIS Command Components . The ...",t:"OPC EIE – UIS Command Component Parameters"},"1371":{i:0.000103193594545089,u:"../Content/Topics/EIEs - Remote Devices/OPC EIE Array Data Group.htm",a:"Array Data Group An array data group enables you to display array data elements in a table.  A single data group can include a combination of array and non-array data. An array data group is always read only. There are different ways to handle an OPC array. An OPC server can return an array of data ...",t:"OPC EIE – Array Data Group"},"1372":{i:0.000210159073765855,u:"../Content/Topics/EIEs - Remote Devices/OPC EIE Configurable Data Group.htm",a:"Configurable Data Group A \"Configurable Data Group\" (CfgDg) provides a flexible way to create custom data groups on a per-device basis by using the remote device editor. You can use such data groups in one-off scenarios like testing or, if the data group definition is more broadly useful, paste its ...",t:"OPC EIE – Configurable Data Group"},"1373":{i:0.000174431807547158,u:"../Content/Topics/EIEs - Remote Devices/OPC EIE Single Item Data Group.htm",a:"Single Item Data Group The \"Single Item\" (SingleItem) data group enables you to read from and write to a single user-specified item ID for an OPC EIE.  You can use a  single item data group on an ad hoc basis from a data group editor or you can set up a UIS command that uses a  single item data ...",t:"OPC EIE – Single Item Data Group"},"1374":{i:0.000391331711514331,u:"../Content/Topics/EIEs - Remote Devices/OPC EIE Group Management.htm",a:"OPC Group Management An OPC group is used to represent a set of points that have a common polling/update frequency, are related by functionality, or are commonly viewed together. In CygNet, options are available to manage OPC groups, thus improving resource allocation issues and server limitations.  ...",t:"OPC EIE – Group Management"},"1375":{i:8.85744392911972E-05,u:"../Content/Topics/EIEs - Remote Devices/OPC EIE Quality Mapping.htm",a:"OPC Quality Mapping The OPC EIE device template file includes a section for quality bit mapping, which is specific only to the OPC device.  The qualityMapping section of the OPC EIE device template file is an optional section that provides a method to map OPC quality values  to point status bits in ...",t:"OPC EIE – Quality Mapping"},"1376":{i:0.00014302684448332,u:"../Content/Topics/EIEs - Remote Devices/OPC Lufkin EIE.htm",a:"The OPC Lufkin EIE supports controllers whose data is maintained by an OPC server. The OPC Lufkin  EIE uses the CygNet OPC Comm device to communicate with an OPC server. OPC is a client/server technology. One application acts as the server providing data, and the other acts as a client using data. ...",t:"OPC Lufkin EIE"},"1377":{i:8.4564838730016E-05,u:"../Content/Topics/EIEs - Remote Devices/OPC Lufkin Device Page Properties.htm",a:"Editor – Device Page Use the Device page to view, select, and modify general device settings for a remote device. These settings are the minimum required for remote device functionality. The Device page of a remote device editor typically contains settings unique to its field device type(s) or to ...",t:"OPC Lufkin EIE – Device Page"},"1378":{i:0.000107384045928008,u:"../Content/Topics/EIEs - Remote Devices/OPC Lufkin UIS Command Component Parameters.htm",a:"UIS Command Component Parameters The following tables list and describe the parameters specific to the UIS command component types for this remote device: CYUPDTPT CYWAITPT DG_F_DEV DG_T_DEV For more general information about UIS command component parameters, see  UIS Command Components . The ...",t:"OPC Lufkin EIE – UIS Command Component Parameters"},"1379":{i:0.000114622014872651,u:"../Content/Topics/EIEs - Remote Devices/OPC Lufkin Dynagraph Data Group.htm",a:"OPC Lufkin EIE Dynagraph Card Data Group The OPC Lufkin  EIE \"Dynagraph Card\" (DynaCard) data group enables the retrieval of dynagraph card data using a plugin developed by Kepware. The XML of each \"Dynagraph Card\" data group contains a number of data group elements. TheDataGroupElement elements ...",t:"OPC Lukin EIE – Dynagraph Card Data Group"},"1380":{i:0.000101885435741446,u:"../Content/Topics/EIEs - Remote Devices/OPC Lufkin Configurable Data Group.htm",a:"Configurable Data Group A \"Configurable Data Group\" (CfgDg) provides a flexible way to create custom data groups on a per-device basis by using the remote device editor. You can use such data groups in one-off scenarios like testing or, if the data group definition is more broadly useful, paste its ...",t:"OPC Lufkin EIE – Configurable Data Group"},"1381":{i:0.00014302684448332,u:"../Content/Topics/EIEs - Remote Devices/OPC Weatherford EIE.htm",a:"The OPC Weatherford EIE supports controllers whose data is maintained by an OPC server. The OPC Weatherford  EIE uses the CygNet OPC Comm device to communicate with an OPC server. OPC is a client/server technology. One application acts as the server providing data, and the other acts as a client ...",t:"OPC Weatherford EIE"},"1382":{i:0.000206422815062966,u:"../Content/Topics/EIEs - Remote Devices/OPC Weatherford Device Page Properties.htm",a:"Editor – Device Page Use the Device page to view, select, and modify general device settings for a remote device. These settings are the minimum required for remote device functionality. The Device page of a remote device editor typically contains settings unique to its field device type(s) or to ...",t:"OPC Weatherford EIE – Device Page"},"1383":{i:9.92698188646028E-05,u:"../Content/Topics/EIEs - Remote Devices/OPC Weatherford UIS Command Component Parameters.htm",a:"UIS Command Component Parameters The following tables list and describe the parameters specific to the UIS command component types for this remote device: CYUPDTPT CYWAITPT DG_F_DEV DG_T_DEV For more general information about UIS command component parameters, see  UIS Command Components . The ...",t:"OPC Weatherford EIE – UIS Command Component Parameters"},"1384":{i:0.000106507787809245,u:"../Content/Topics/EIEs - Remote Devices/OPC Weatherford Dynagraph Card Data Groups.htm",a:"OPC Weatherford EIE Dynagraph Card Data Group The OPC Weatherford  EIE \"Dynagraph Card\" (DynaCard) data group enables the retrieval of dynagraph card data using a plugin developed by Kepware. The XML of each \"Dynagraph Card\" data group contains a number of data group elements. TheDataGroupElement ...",t:"OPC Weatherford EIE – Dynagraph Card Data Group"},"1385":{i:0.000124614189887021,u:"../Content/Topics/EIEs - Remote Devices/OPC Weatherford Event Directory Data Group.htm",a:"Event Directory Data Group The OPC Weatherford EIE \"Event Directory\" (EvtDir) data group gets all types of events from the remote device. On the View Data dialog of the \"Event Directory\" data group, from the Options drop-down menu, select Get selected event cards to read the cards associated with ...",t:"OPC Weatherford EIE – Event Directory Data Group"},"1386":{i:9.92698188646028E-05,u:"../Content/Topics/EIEs - Remote Devices/OPC Weatherford Configurable Data Group.htm",a:"Configurable Data Group A \"Configurable Data Group\" (CfgDg) provides a flexible way to create custom data groups on a per-device basis by using the remote device editor. You can use such data groups in one-off scenarios like testing or, if the data group definition is more broadly useful, paste its ...",t:"OPC Lufkin EIE – Configurable Data Group"},"1387":{i:9.28498514091559E-05,u:"../Content/Topics/EIEs - Remote Devices/ProSoft EIE.htm",a:"The ProSoft EIE enables direct access to a ProSoft flow computer module through the module\u0027s communication port. (Alternatively, you can indirectly access a ProSoft module by  routing to an additional port segment  through a parent Allen-Bradley Logix5000 CPU.) The ProSoft EIE is based on Modbus ...",t:"ProSoft EIE"},"1388":{i:7.28345221223864E-05,u:"../Content/Topics/EIEs - Remote Devices/ProSoft Device Page Properties.htm",a:" Editor – Device Page Use the Device page to view, select, and modify general device settings for a remote device. These settings are the minimum required for remote device functionality. The Device page of a remote device editor typically contains settings unique to its field device type(s) or to ...",t:"ProSoft EIE – Device Page"},"1389":{i:0.000202821982536523,u:"../Content/Topics/EIEs - Remote Devices/ProSoft EIE Data Groups.htm",a:"Data Groups With few exceptions, data groups must be defined in a device template file in order for them to be available for use on a remote device. Which data groups are defined by a device template file depends on protocol, device type, and unique configuration. CygNet distributes sample device ...",t:"ProSoft EIE – Data Groups"},"1390":{i:0.000101629710560023,u:"../Content/Topics/EIEs - Remote Devices/ProSoft EIE UIS Command Component Parameters.htm",a:"UIS Command Component Parameters The following tables list and describe the parameters specific to the UIS command component types for this remote device: CYUPDTPT CYWAITPT DG_F_DEV DG_T_DEV For more general information about UIS command component parameters, see  UIS Command Components . The ...",t:"ProSoft EIE – UIS Command Component Parameters"},"1391":{i:9.74630556343303E-05,u:"../Content/Topics/EIEs - Remote Devices/ProSoft EIE Composite Data Group.htm",a:"Composite Data Group The composite data group is a special kind of data group that enables you to combine any data group element(s) from any data group(s) as long as they are in the same template as the composite data group. The composite data group is made up of a combination of support data group ...",t:"ProSoft EIE – Composite Data Group"},"1392":{i:9.74630556343303E-05,u:"../Content/Topics/EIEs - Remote Devices/ProSoft EIE Configurable Data Group.htm",a:"Configurable Data Group A \"Configurable Data Group\" provides a flexible way to create register-based data groups on a per-device basis by using the remote device editor. You can use such data groups in one-off scenarios like testing or, if the data group definition is more broadly useful, paste its ...",t:"ProSoft EIE – Configurable Data Group"},"1393":{i:9.74630556343303E-05,u:"../Content/Topics/EIEs - Remote Devices/ProSoft EIE FMS Legacy Configuration Data Group.htm",a:"FMS Legacy Configuration Data Group The \"FMS Legacy Configuration Data\" (GmrConfig) data group only gets data requested by FMS. The \"FMS Legacy Configuration\" data group depends on one or more support data groups for its data. Support data groups are found in the supportDg element of your sample ...",t:"ProSoft EIE – FMS Legacy Configuration Data Group"},"1394":{i:9.74630556343303E-05,u:"../Content/Topics/EIEs - Remote Devices/ProSoft EIE FMS Legacy Config Send Data Group.htm",a:"FMS Legacy Config Send Data Group The \"FMS Legacy Config Send Data\" (GmrCfgSend) data group is used to send modified measurement data to the field device. The \"FMS Legacy Config Send\" data group depends on one or more support data groups for its data. Support data groups are found in the supportDg ...",t:"ProSoft EIE – FMS Legacy Configuration Send Data Group"},"1395":{i:0.000106517044195148,u:"../Content/Topics/EIEs - Remote Devices/ProSoft EIE FMS Legacy History Data Group.htm",a:"FMS Legacy History Data Group The \"FMS Legacy History Data\" (GmrHist) data group is required by measurement to collect historical data. The \"FMS Legacy History\" data group does not retrieve data directly from a remote device; instead, it depends on another data group to supply data to it. The \"FMS ...",t:"ProSoft EIE – FMS Legacy History Data Group"},"1396":{i:7.28345221223864E-05,u:"../Content/Topics/EIEs - Remote Devices/ProSoft EIE Ordinalized Data Group.htm",a:"Ordinalized Data Group Modbus devices support two kinds of ordinalized data groups. See the following subsections for more information: Data Group Ordinals and Blocks Data Group Ordinals and Register Ordinals Data Group Ordinals and Blocks Blocks must be defined for every valid data group ordinal. ...",t:"ProSoft EIE – Ordinalized Data Group"},"1397":{i:9.74630556343303E-05,u:"../Content/Topics/EIEs - Remote Devices/ProSoft EIE Single-Element Data Group.htm",a:"Single-Element Data Group Single-element data groups enable you to read from and write to a single user-specified parameter, point, item, or register (or coil), depending on remote device type. Sometimes such data groups are identified in a device template file using the attribute  dgCat  and other ...",t:"ProSoft EIE – Single-Element Data Group"},"1398":{i:0.000126669099125235,u:"../Content/Topics/EIEs - Remote Devices/ProSoft EIE History Retrieval Optimization.htm",a:"History Retrieval Optimization This EIE provides multiple methods to retrieve historical data, at least one of which is optimized. The non-optimized way to retrieve historical data uses static parameters like start date, end date, and index to define data retrieval. The number of messages retrieved ...",t:"ProSoft EIE – History Retrieval Optimization"},"1399":{i:9.28498514091559E-05,u:"../Content/Topics/EIEs - Remote Devices/Reynolds EIE.htm",a:"The Reynolds EIE interfaces with the Reynolds RTU, a analog input charting device with a high sampling rate. The EIE supports two general purpose status polls — current conditions and alarm status. It also separates log retrieval polls into Alarm, Profile, Watch, and Fast logs. The content of these ...",t:"Reynolds EIE"},"1400":{i:8.69278939277474E-05,u:"../Content/Topics/EIEs - Remote Devices/Reynolds Device Page Properties.htm",a:"Editor – Device Page Use the Device page to view, select, and modify general device settings for a remote device. These settings are the minimum required for remote device functionality. The Device page of a remote device editor typically contains settings unique to its field device type(s) or to ...",t:"Reynolds EIE – Device Page"},});