

module.exports = {
    set: function ( ) {

           config.environment = "local";
           config.dbHost = "app1.cdq9kgk8kh4u.us-west-2.rds.amazonaws.com";
           config.dbUser = 'app_user';
           config.dbPassword = 'cobrar31';
					 config.dbName = 'app';


					 //config.targetApiPort = 7001;
					 //config.targetCheckinApi = 'localhost:'+config.targetApiPort+'/targeting/checkin?visitId=';

// for alex local dev
 // config.environment = "dev";
 //           config.dbHost = "devdb.cbaou6guzhlr.us-east-1.rds.amazonaws.com";
 //           config.dbUser = 'revlinkdev';
 //           config.dbPassword = 'M00gerB00ger1';
 //           config.dbName = 'revlink_dev';
    }
}
