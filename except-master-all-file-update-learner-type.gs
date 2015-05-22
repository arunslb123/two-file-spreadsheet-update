function setUp() {
 ScriptProperties.setProperty('active', SpreadsheetApp.getActiveSpreadsheet().getId());
}

function doGet(request){
  var sheet1 = SpreadsheetApp.getActiveSpreadsheet();
  var sheets=sheet1.getSheets();
  
  for each(var sh in sheets){
    Logger.log(sh.getSheetName());
    updateLearnerType(sh.getSheetName());
  }
  
  
 // var parm =request.parameter.name;

  
}

function updateLearnerType(parm){
  
  if(parm!="Master"){
  
    Logger.log(parm);
  
  var ss = SpreadsheetApp.openById(ScriptProperties.getProperty('active'));
  var sheet = ss.getSheetByName(parm);
  ss.setActiveSheet(sheet);
  var data = sheet.getDataRange().getValues();
  
  
  
  var ss_master = SpreadsheetApp.openById(ScriptProperties.getProperty('active'));
  var sheet_master = ss_master.getSheetByName("Master");
  ss_master.setActiveSheet(sheet_master);
  var data_master = sheet_master.getDataRange().getValues();
  
  
  
  var range = sheet.getRange(1,1); 
  var checkType = range.getValue();
  Logger.log(checkType);
  
  if(checkType==='S'){
    
      for(n=1;n<data.length;++n){
        var cell = data[n][1] ;
        var changeFormat=changeFormatString(n,1);
    //  Logger.log(changeFormat);
        var cell = sheet.getRange(changeFormat);
        Logger.log(cell.getFormula());
        var lastVal=cell.getFormula();
        lastVal=lastVal.charAt(lastVal.length-1);
        Logger.log(lastVal);
        var formu="=Master!B"+lastVal;
        
        var currentCell='C'+lastVal;
        currentCell=sheet.getRange(currentCell);
        currentCell.setFormula(formu);
        
      
    } 
   
  }
  else if(checkType==='F'){ 
    
      for(n=1;n<data.length;++n){
        var cell = data[n][1] ;
        var changeFormat=changeFormatString(n,1);
    //  Logger.log(changeFormat);
        var cell = sheet.getRange(changeFormat);
        Logger.log(cell.getFormula());
        var lastVal=cell.getFormula();
        lastVal=lastVal.charAt(lastVal.length-1);
        Logger.log(lastVal);
        var formu="=Master!C"+lastVal;
        
        var currentCell='C'+lastVal;
        currentCell=sheet.getRange(currentCell);
        currentCell.setFormula(formu);
        
      
    }   
  }
  }
}
  

function changeFormatString(numb,tex){
  
  var alpha=['A','B','C','D','E','F','G'];
  var val=numb+1;
  
  var output=alpha[tex]+val;
 // Logger.log(output);
  return output;
  
  
}



