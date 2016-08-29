---
layout: markdown
title: Geneious Plugin
summary: 生物信息学软件 Geneious 插件开发指南
permalink: java/geneious
private: true
---

# Geneious Plugin [#](http://geneious.com/plugin-development)

Geneious 是一个跨平台的商业生物信息学软件. 插件基于java开发


# extend GeneiousPlugin

 implement it

##  override getServices()

服务

```
 .  GeneiousService (com.biomatters.geneious.publicapi.plugin)
 +--.  DatabaseService (com.biomatters.geneious.publicapi.databaseservice)
    +--.  WritableDatabaseService (com.biomatters.geneious.publicapi.databaseservice)
    |  +--. DummyService in WritableDatabaseService (com.biomatters.geneious.publicapi.databaseservice)
    |  |  +--.bL (com.biomatters.iseek.gui)
    |  |  +--.UnavailableService in ServiceOption (com.biomatters.geneious.publicapi.plugin)
    |  +--. SequenceSearchDatabaseService (com.biomatters.geneious.publicapi.databaseservice)
    |  +--. PartiallyWritableDatabaseService (com.biomatters.geneious.publicapi.databaseservice)
    +--. ISeekServices (com.biomatters.iseek.application)
    +--. UsageTrackingUploadService (com.biomatters.plugins.usageTracking)
    +--. GeneiousServiceWithPanel (com.biomatters.geneious.publicapi.plugin)
       +--. SequenceDatabaseSuperService (com.biomatters.geneious.publicapi.databaseservice)
       +--. GeneiousRemoteService (com.biomatters.geneious.publicapi.plugin)
       +--. FileSetupService (com.biomatters.geneious.plugins.filedatabase.filesetup)
```

##  override getDocumentOperations()

文件操作

```
 .  DocumentOperation (com.biomatters.geneious.publicapi.plugin)
 +--.  GeneiousGridDocumentOperation (com.biomatters.geneious.publicapi.plugin)
 +--.  Wrapper in DocumentOperation (com.biomatters.geneious.publicapi.plugin)
 +--.  AlignmentUtilities$LegacyOperation (com.biomatters.geneious.plugins.alignment)
 +--.  ExtractPcrProductOperation (com.biomatters.plugins.primerDesign.extractpcrproduct)
 +--.  InternalAlignmentOperation (com.biomatters.iseek.plugin)
 +--.  SendFeedbackOperation (com.biomatters.plugins.feedback)
 +--.  CategoryOperation in OperationCategoryManager (com.biomatters.iseek.plugin)
 +--.  PointLigationOperation (com.biomatters.plugins.pointligation)
 +--.  DocumentOperationAnnotationGeneratorWrapper (com.biomatters.iseek.plugin)
 +--.  WrapperOperation (com.biomatters.iseek.plugin.wrapperplugins)
 +--.  ExportDocumentsOperation (com.biomatters.iseek.plugin.fileexport)
 +--.  ExportDocumentsWithRelationsOperation (com.biomatters.iseek.plugin.fileexport)
 |  +--.  TestConcatenateOperation (com.biomatters.iseek.plugin)
 +--.  TestConcatenateOperationThatReturnsDocuments (com.biomatters.iseek.plugin)
 |  +--.  TestConcatenateOperationThatUsesCallback (com.biomatters.iseek.plugin)
 |  +--.  GeneiousServerDocumentOperation (com.biomatters.iseek.plugin)
 +--.  DocumentOperationWrapper in BiomattersAlignmentOperation (com.biomatters.geneious.plugins)

```

##  override getDocumentFileImporters()


```
 .  DocumentFileImporter (com.biomatters.geneious.publicapi.plugin)
 +--.  ClustalDocumentImporter (com.biomatters.importers)
 +--.  RSFDocumentImporter (com.biomatters.importers)
 +--.  AnnotationImporter (com.biomatters.fileimportexport.annotationimporter)
 +--.  PileUpDocumentImporter (com.biomatters.importers)
 +--.  NexusDocumentImporter (com.biomatters.geneious.publicapi.implementations)
 +--.  InternalDocumentFileImporter (com.biomatters.geneious.common.privateapi)
 |  +--.  GeneiousFileImporter (com.biomatters.iseek.application)
 +--.  FastaImporter (com.biomatters.fileimportexport.fasta)
 +--.  OptionProfileImporter (com.biomatters.iseek.plugin.fileimport)
 +--.  BackupFileImporter (com.biomatters.iseek.application)
```
##  override getDocumentFileExporters()

##  override getDocumentViewerFactories()

序列视图

```
 .  DocumentViewer (com.biomatters.geneious.publicapi.plugin)
 +--.  ParentOrDescendantSubViewer (com.biomatters.plugins.parentdescendantviewer.viewers)
 +--.  TableDocumentViewer (com.biomatters.geneious.plugins)
 +--.  TestDocumentViewer (com.syngen.tests)
 +--.  LoadDocumentsViewer in LoadDocumentsViewerFactory (com.biomatters.iseek.plugin)
```

##  override getDocumentActions()

操作按钮

```
void actionPerformed(AnnotatedPluginDocument[] annotatedPluginDocuments)
```

##  override getSequenceAnnotationGenerators()

序列标注

```
List<List<SequenceAnnotation>> generateAnnotations(AnnotatedPluginDocument[] annotatedPluginDocuments, SelectionRange selectionRange, ProgressListener progressListener, Options options)
```

##  override getSequenceGraphFactories()

序列显示

```
 .  SequenceGraphFactory (com.biomatters.geneious.publicapi.plugin)
 +--.  DefaultSequenceGraphFactory in DefaultSequenceGraphFactories (com.biomatters.geneious.publicapi.implementations)
```

## GeneiousActionOptions

操作按钮

```
  GeneiousActionOptions geneiousActionOptions=new GeneiousActionOptions("Test SequenceAnnotation Generator");
  geneiousActionOptions.setInPopupMenu(true);
  geneiousActionOptions.setInMainToolbar(true);
  geneiousActionOptions.setMainMenuLocation(GeneiousActionOptions.MainMenu.AnnotateAndPredict);
```

# Options



# utils

