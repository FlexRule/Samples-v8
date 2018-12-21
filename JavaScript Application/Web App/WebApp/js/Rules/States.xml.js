/*
    Generated by FlexRule JavaScript Compiler at: 12/05/2017 2:00:31 PM
    FlexRule Runtime : 7.0.154
    FlexRule Designer: 0.0.0
*/

/*
    Original Logic Document Information:
    --------------------------------------------------------------------------
    Logic Type  : DecisionTable
    Last Updated: 11/05/2017 9:08:36 AM
    SHA1        : ad08e1b5f5b53a9f7a593a9821a0a339f4947a11
*/
FlexRule.ApplicationsLogic.register("SampleUI.BusinessLogic","States",function(){var parameters=[{name:'country',direction:'in',type:'variable' },{name:'states',direction:'out',type:'variable' }];var processAll=true;this.run=function(input_country){return this.runWithParameters({processAll:processAll },input_country);};this.runWithParameters=function($fr$runParameter,input_country){var exec=new Executor(this.engine,parameters);$fr$runParameter.processAll=processAll;var outputs=exec.run($fr$runParameter,input_country);return this.engine.getContext({model:this,outputs:outputs });};this.getDescriptions=function(){var exec=new Executor(this.engine,parameters);return this.engine.getDescriptions(exec.validation,parameters);};var Executor=function($fr$engine,$fr$parameters){var country=null,states=$fr$engine.functions.array();var $context=$fr$engine.getExecutionContext({getContext:function(){return $fr$engine.context; },getSignature:function(){var sig={};for(var i=0; i < $fr$parameters.length; i++)sig[$fr$parameters[i].name]=eval($fr$parameters[i].name);return sig;}});var models=function(){var validation=[$fr$engine.createLogic('main',function(processAll){if($fr$engine.validate(validation,'table0row1')&&!processAll){return;}if($fr$engine.validate(validation,'table0row2')&&!processAll){return;}if($fr$engine.validate(validation,'table0row3')&&!processAll){return;}if($fr$engine.validate(validation,'table0row4')&&!processAll){return;}if($fr$engine.validate(validation,'table0row5')&&!processAll){return;}if($fr$engine.validate(validation,'table0row6')&&!processAll){return;}if($fr$engine.validate(validation,'table0row7')&&!processAll){return;}if($fr$engine.validate(validation,'table0row8')&&!processAll){return;}if($fr$engine.validate(validation,'table0row9')&&!processAll){return;}if($fr$engine.validate(validation,'table0row10')&&!processAll){return;}if($fr$engine.validate(validation,'table0row11')&&!processAll){return;}if($fr$engine.validate(validation,'table0row12')&&!processAll){return;}if($fr$engine.validate(validation,'table0row13')&&!processAll){return;}if($fr$engine.validate(validation,'table0row14')&&!processAll){return;}if($fr$engine.validate(validation,'table0row15')&&!processAll){return;}if($fr$engine.validate(validation,'table0row16')&&!processAll){return;}if($fr$engine.validate(validation,'table0row17')&&!processAll){return;}if($fr$engine.validate(validation,'table0row18')&&!processAll){return;}if($fr$engine.validate(validation,'table0row19')&&!processAll){return;}if($fr$engine.validate(validation,'table0row20')&&!processAll){return;}if($fr$engine.validate(validation,'table0row21')&&!processAll){return;}}),$fr$engine.createLogic('table0row1',function(){var cond0;var cond=(cond0=(country=="Australia"));if(cond){states.$fr$monad$add("New South Wales");}return cond;}),$fr$engine.createLogic('table0row2',function(){var cond0;var cond=(cond0=(country=="Australia"));if(cond){states.$fr$monad$add("Queensland");}return cond;}),$fr$engine.createLogic('table0row3',function(){var cond0;var cond=(cond0=(country=="Australia"));if(cond){states.$fr$monad$add("Victoria");}return cond;}),$fr$engine.createLogic('table0row4',function(){var cond0;var cond=(cond0=(country=="Australia"));if(cond){states.$fr$monad$add("Western Australia");}return cond;}),$fr$engine.createLogic('table0row5',function(){var cond0;var cond=(cond0=(country=="Australia"));if(cond){states.$fr$monad$add("South Australia");}return cond;}),$fr$engine.createLogic('table0row6',function(){var cond0;var cond=(cond0=(country=="Australia"));if(cond){states.$fr$monad$add("Tasmania");}return cond;}),$fr$engine.createLogic('table0row7',function(){var cond0;var cond=(cond0=(country=="New Zealand"));if(cond){states.$fr$monad$add("Auckland");}return cond;}),$fr$engine.createLogic('table0row8',function(){var cond0;var cond=(cond0=(country=="New Zealand"));if(cond){states.$fr$monad$add("Wellington");}return cond;}),$fr$engine.createLogic('table0row9',function(){var cond0;var cond=(cond0=(country=="New Zealand"));if(cond){states.$fr$monad$add("Christchurch");}return cond;}),$fr$engine.createLogic('table0row10',function(){var cond0;var cond=(cond0=(country=="New Zealand"));if(cond){states.$fr$monad$add("Hamilton");}return cond;}),$fr$engine.createLogic('table0row11',function(){var cond0;var cond=(cond0=(country=="New Zealand"));if(cond){states.$fr$monad$add("Tauranga");}return cond;}),$fr$engine.createLogic('table0row12',function(){var cond0;var cond=(cond0=(country=="New Zealand"));if(cond){states.$fr$monad$add("Napier-Hasting");}return cond;}),$fr$engine.createLogic('table0row13',function(){var cond0;var cond=(cond0=(country=="New Zealand"));if(cond){states.$fr$monad$add("Dunedin");}return cond;}),$fr$engine.createLogic('table0row14',function(){var cond0;var cond=(cond0=(country=="New Zealand"));if(cond){states.$fr$monad$add("Palmerston North");}return cond;}),$fr$engine.createLogic('table0row15',function(){var cond0;var cond=(cond0=(country=="New Zealand"));if(cond){states.$fr$monad$add("Nelson");}return cond;}),$fr$engine.createLogic('table0row16',function(){var cond0;var cond=(cond0=(country=="New Zealand"));if(cond){states.$fr$monad$add("Rotorua");}return cond;}),$fr$engine.createLogic('table0row17',function(){var cond0;var cond=(cond0=(country=="New Zealand"));if(cond){states.$fr$monad$add("New Plymouth");}return cond;}),$fr$engine.createLogic('table0row18',function(){var cond0;var cond=(cond0=(country=="New Zealand"));if(cond){states.$fr$monad$add("Whangarei");}return cond;}),$fr$engine.createLogic('table0row19',function(){var cond0;var cond=(cond0=(country=="New Zealand"));if(cond){states.$fr$monad$add("Invercargill");}return cond;}),$fr$engine.createLogic('table0row20',function(){var cond0;var cond=(cond0=(country=="New Zealand"));if(cond){states.$fr$monad$add("Whanganui");}return cond;}),$fr$engine.createLogic('table0row21',function(){var cond0;var cond=(cond0=(country=="New Zealand"));if(cond){states.$fr$monad$add("Gisborne");}return cond;})];var run=function(processAll,input_country){country=input_country;$fr$engine.validate(validation,'main',[processAll]);return[{'name':'states','value':states }];};return{run:run };};return models();};});