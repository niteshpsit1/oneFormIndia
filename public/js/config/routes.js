var React = require('react');
var AppHeader = require('../components/appHeader');
var UnAuthorised = require('../components/mainContainer/unAuthorised');

/*
user begins
*/
var User = require('../components/mainContainer/user/navigation');
/*home begins*/
var UhomePanel = require('../components/mainContainer/user/home/uHomePanel');
var UallForms = require('../components/mainContainer/user/home/contents/allForms');
var UrecentForms = require('../components/mainContainer/user/home/contents/recentForms');
var UupcomingForms = require('../components/mainContainer/user/home/contents/upcomingForms');
var UclosestForms = require('../components/mainContainer/user/home/contents/closestDeadlineForms');
var UpopularForms = require('../components/mainContainer/user/home/contents/popularForms');
/*home ends*/
/*profile begins*/
var UprofilePanel = require('../components/mainContainer/user/profile/uProfilePanel');
var UshowProfile = require('../components/mainContainer/user/profile/contents/showProfile');
var UeditProfile = require('../components/mainContainer/user/profile/contents/editProfile');
var Uresume = require('../components/mainContainer/user/profile/contents/resume');
var UadmitCards = require('../components/mainContainer/user/profile/contents/admitCards');
var UsubmittedForms = require('../components/mainContainer/user/profile/contents/submittedHistory');
/*profile ends*/
/*
user ends
*/
/*
institute begins
*/
var Institute = require('../components/mainContainer/institute/navigation');
var ImanageExams = require('../components/mainContainer/institute/examPlanning/iManageExams');
/*profile begins*/
var IprofilePanel = require('../components/mainContainer/institute/profile/iProfilePanel');
var IshowProfile = require('../components/mainContainer/institute/profile/contents/showProfile');
var IeditProfile = require('../components/mainContainer/institute/profile/contents/editProfile');
/*profile ends*/
/*exam planning begins*/
var IexamPlanningPanel = require('../components/mainContainer/institute/examPlanning/iExamPlanningPanel');
var Iinformation = require('../components/mainContainer/institute/examPlanning/contents/generalInformation');
var IcreateForm = require('../components/mainContainer/institute/examPlanning/contents/createForm');
var Icentre = require('../components/mainContainer/institute/examPlanning/contents/examCentreManagement');
var Ischedule = require('../components/mainContainer/institute/examPlanning/contents/scheduleManagement');
var IadmitCards = require('../components/mainContainer/institute/examPlanning/contents/admitCards');
var IsubmittedForms = require('../components/mainContainer/institute/examPlanning/contents/submittedForms');

var IscheduleLogin = require('../components/mainContainer/institute/examPlanning/contents/scheduleLogin');
/*exam planning ends*/

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
    <Route name="app" path="/" handler={AppHeader}>
        <Route name="unAuth" path="/home" handler={UnAuthorised} />
        <Route name="user" path="/user" handler={User}>
            <Route name="userHome" path="/user/home" handler={UhomePanel}>
                <Route name="uAllForms" path="/user/home/allForms" handler={UallForms} />
                <Route name="uRecentForms" path="/user/home/recentForms" handler={UrecentForms} />
                <Route name="uUpcomingForms" path="/user/home/upcomingForms" handler={UupcomingForms} />
                <Route name="uClosestForms" path="/user/home/closestForms" handler={UclosestForms} />
                <Route name="uPopularForms" path="/user/home/popularForms" handler={UpopularForms} />
                <DefaultRoute handler={UallForms} />
            </Route>
            <Route name="userProfile" path="/user/profile" handler={UprofilePanel}>
                <Route name="uShowProfile" path="/user/profile/showProfile" handler={UshowProfile} />
                <Route name="uEditProfile" path="/user/profile/editProfile" handler={UeditProfile} />
                <Route name="uResume" path="/user/profile/resume" handler={Uresume} />
                <Route name="uAdmitCards" path="/user/profile/admitCards" handler={UadmitCards} />
                <Route name="uSubmittedForms" path="/user/profile/submittedForms" handler={UsubmittedForms} />
                <DefaultRoute handler={UshowProfile} />
            </Route>
            <DefaultRoute handler={UhomePanel} />
        </Route>
        <Route name="institute" path="/institute" handler={Institute}>
            <Route name="instituteProfile" path="/institute/profile" handler={IprofilePanel}>
                <Route name="iShowProfile" path="/institute/profile/showProfile" handler={IshowProfile} />
                <Route name="iEditProfile" path="/institute/profile/editProfile" handler={IeditProfile} />
                <DefaultRoute handler={IshowProfile} />
            </Route>
            <Route name="instituteExamPlanning" path="/institute/examPlanning/exam" handler={IexamPlanningPanel}>
                <Route name="generalInformation" path="/institute/examPlanning/exam/information" handler={Iinformation} />
                <Route name="createForm" path="/institute/examPlanning/exam/createForm" handler={IcreateForm} />
                <Route name="centreManagement" path="/institute/examPlanning/exam/centre" handler={Icentre} />
                <Route name="scheduleManagement" path="/institute/examPlanning/exam/schedule" handler={Ischedule} />
                <Route name="admitCardsManagement" path="/institute/examPlanning/exam/admitCards" handler={IadmitCards} />
                <Route name="submittedForms" path="/institute/examPlanning/exam/submittedForms" handler={IsubmittedForms} />
                <Route name="scheduleLogin" path="/institute/examPlanning/exam/loginForSchedule" handler={IscheduleLogin} />
                <DefaultRoute handler={Iinformation} />
            </Route>
            <Route name="instituteManageExams" path="/institute/examPlanning" handler={ImanageExams} />
            <DefaultRoute handler={IprofilePanel} />  
        </Route>
        <DefaultRoute handler={UnAuthorised} />
    </Route>
);