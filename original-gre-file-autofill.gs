function setUp() {
 ScriptProperties.setProperty('active', SpreadsheetApp.getActiveSpreadsheet().getId());
}
  
/**
 * doGet
 */
function doGet(request){
  var ss = SpreadsheetApp.openById(ScriptProperties.getProperty('active'));
  var sheet = ss.getSheetByName("Gopi");
  ss.setActiveSheet(sheet);
  updateLearnerType();

}

function updateLearnerType(){
  
  var ss = SpreadsheetApp.openById(ScriptProperties.getProperty('active'));
  var sheet = ss.getSheetByName("Gopi");
  ss.setActiveSheet(sheet);
  var data = sheet.getDataRange().getValues();
  
  
  
  var ss_master = SpreadsheetApp.openById(ScriptProperties.getProperty('active'));
  var sheet_master = ss_master.getSheetByName("Master");
  ss_master.setActiveSheet(sheet_master);
  var data_master = sheet_master.getDataRange().getValues();
  
  
  
  var range = sheet.getRange(2,1); 
  var checkType = range.getValue();
  Logger.log(checkType);
  
  var charIndexToNumber=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  
  
  var task=['G','L','Q'];
 
  for each(var t in task){
      var ind=convertIndex(t,charIndexToNumber);
 
  // For fast learner
  if(checkType==='F'){
      var ind=convertIndex(t,charIndexToNumber);
      for(n=1;n<data.length;++n){
        var stringFormat=t+n;
      //  Logger.log(stringFormat);
        var range = sheet.getRange(stringFormat);
        var cell = data[n][ind] ;
        var oldFormula=range.getFormula();
       // Logger.log(range.getFormula());
        if(oldFormula!=""){
          var lastVal = oldFormula.match(/\d+$/)[0];
         // Logger.log(lastVal);
          var newFormula="=Master!E"+lastVal;
          var currentCell=charIndexToNumber[ind+1];
          currentCell= currentCell+n;
          Logger.log(currentCell);
          currentCell=sheet.getRange(currentCell);
          currentCell.setFormula(newFormula);
             
        }        
    }   
  }
    // For Average Learner
      if(checkType==='A'){
      var ind=convertIndex(t,charIndexToNumber);
      for(n=1;n<data.length;++n){
        var stringFormat=t+n;
      //  Logger.log(stringFormat);
        var range = sheet.getRange(stringFormat);
        var cell = data[n][ind] ;
        var oldFormula=range.getFormula();
       // Logger.log(range.getFormula());
        if(oldFormula!=""){
          var lastVal = oldFormula.match(/\d+$/)[0];
         // Logger.log(lastVal);
          var newFormula="=Master!F"+lastVal;
          var currentCell=charIndexToNumber[ind+1];
          currentCell= currentCell+n;
          Logger.log(currentCell);
          currentCell=sheet.getRange(currentCell);
          currentCell.setFormula(newFormula);
             
        }        
    }   
  }
    // For Slow learner
      if(checkType==='S'){
      var ind=convertIndex(t,charIndexToNumber);
      for(n=1;n<data.length;++n){
        var stringFormat=t+n;
      //  Logger.log(stringFormat);
        var range = sheet.getRange(stringFormat);
        var cell = data[n][ind] ;
        var oldFormula=range.getFormula();
       // Logger.log(range.getFormula());
        if(oldFormula!=""){
          var lastVal = oldFormula.match(/\d+$/)[0];
         // Logger.log(lastVal);
          var newFormula="=Master!G"+lastVal;
          var currentCell=charIndexToNumber[ind+1];
          currentCell= currentCell+n;
          Logger.log(currentCell);
          currentCell=sheet.getRange(currentCell);
          currentCell.setFormula(newFormula);
             
        }        
    }   
  }
  
  }
}


function convertIndex(t,charIndexToNumber){
  for(var i=0;i<charIndexToNumber.length;i++){
    if(charIndexToNumber[i]===t){
      return i;
    }
  }
}
  
  

function changeFormatString(numb,tex){
  
  var alpha=['A','B','C','D','E','F','G'];
  var val=numb+1;
  var output=alpha[tex]+val;
  return output;
  
  
}




