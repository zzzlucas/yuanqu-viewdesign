import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@comp/layout/index'
import HomeIndex from '@page/home/index'
import LoginIndex from '@page/login/index'
import ActivityIndex from '@page/activity/index'
import MessageIndex from '@page/message/index'
import RecruitmentIndex from '@page/message/RecruitmentIndex'
import PolicyIndex from '@page/policy/index'
import ActivityView from '@page/activity/view'
import TenementRepairsStep1 from '@page/serve/TenementRepairs/step1'
import TenementRepairsStep2 from '@page/serve/TenementRepairs/step2'
import TenementAppealStep1 from '@page/serve/TenementAppeal/step1'
import TenementAppealStep2 from '@page/serve/TenementAppeal/step2'
import DemandSubmissionStep1 from '@page/serve/DemandSubmission/step1'
import DemandSubmissionStep2 from '@page/serve/DemandSubmission/step2'
import ParkingApplyStep1 from '@page/serve/ParkingApply/step1'
import ParkingApplyStep2 from '@page/serve/ParkingApply/step2'
import ItRepairsStep1 from '@page/serve/ItRepairs/step1'
import ItRepairsStep2 from '@page/serve/ItRepairs/step2'
import AdvertisingApplyStep1 from '@page/serve/AdvertisingApply/step1'
import AdvertisingApplyStep2 from '@page/serve/AdvertisingApply/step2'
import PublicFacilitiesStep1 from '@page/serve/PublicFacilities/step1'
import PublicFacilitiesStep2 from '@page/serve/PublicFacilities/step2'
import EnterprisesRecordStep1 from '@page/serve/EnterprisesRecord/step1'
import EnterprisesRecordStep2 from '@page/serve/EnterprisesRecord/step2'
import RubbishDispositionStep1 from '@page/serve/RubbishDisposition/step1'
import RubbishDispositionStep2 from '@page/serve/RubbishDisposition/step2'
import UrbanRoadStep1 from '@page/serve/UrbanRoad/step1'
import UrbanRoadStep2 from '@page/serve/UrbanRoad/step2'
import NewLandProjectStep1 from '@page/serve/NewLandProject/step1'
import NewLandProjectStep2 from '@page/serve/NewLandProject/step2'
import NewRentalProjectStep1 from '@page/serve/NewRentalProject/step1'
import NewRentalProjectStep2 from '@page/serve/NewRentalProject/step2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {path: 'home/index', name: 'HomeIndex', component: HomeIndex},
        {path: 'login/index', name: 'LoginIndex', component: LoginIndex},
        {path: 'activity/index', name: 'ActivityIndex', component: ActivityIndex},
        {path: 'message/index', name: 'MessageIndex', component: MessageIndex},
        {path: 'message/RecruitmentIndex', name: 'RecruitmentIndex', component: RecruitmentIndex},
        {path: 'policy/index', name: 'PolicyIndex', component: PolicyIndex},
        {path: 'activity/view/:id', name: 'ActivityView', component: ActivityView},
        {path: 'serve/TenementRepairs/step1', name: 'TenementRepairsStep1', component: TenementRepairsStep1},
        {path: 'serve/TenementRepairs/step2', name: 'TenementRepairsStep2', component: TenementRepairsStep2},
        {path: 'serve/TenementAppeal/step1', name: 'TenementAppealStep1', component: TenementAppealStep1},
        {path: 'serve/TenementAppeal/step2', name: 'TenementAppealStep2', component: TenementAppealStep2},
        {path: 'serve/DemandSubmission/step1', name: 'DemandSubmissionStep1', component: DemandSubmissionStep1},
        {path: 'serve/DemandSubmission/step2', name: 'DemandSubmissionStep2', component: DemandSubmissionStep2},
        {path: 'serve/ParkingApply/step1', name: 'ParkingApplyStep1', component: ParkingApplyStep1},
        {path: 'serve/ParkingApply/step2', name: 'ParkingApplyStep2', component: ParkingApplyStep2},
        {path: 'serve/ItRepairs/step1', name: 'ItRepairsStep1', component: ItRepairsStep1},
        {path: 'serve/ItRepairs/step2', name: 'ItRepairsStep2', component: ItRepairsStep2},
        {path: 'serve/AdvertisingApply/step1', name: 'AdvertisingApplyStep1', component: AdvertisingApplyStep1},
        {path: 'serve/AdvertisingApply/step2', name: 'AdvertisingApplyStep2', component: AdvertisingApplyStep2},
        {path: 'serve/PublicFacilities/step1', name: 'PublicFacilitiesStep1', component: PublicFacilitiesStep1},
        {path: 'serve/PublicFacilities/step2', name: 'PublicFacilitiesStep2', component: PublicFacilitiesStep2},
        {path: 'serve/EnterprisesRecord/step1', name: 'EnterprisesRecordStep1', component: EnterprisesRecordStep1},
        {path: 'serve/EnterprisesRecord/step2', name: 'EnterprisesRecordStep2', component: EnterprisesRecordStep2},
        {path: 'serve/RubbishDisposition/step1', name: 'RubbishDispositionStep1', component: RubbishDispositionStep1},
        {path: 'serve/RubbishDisposition/step2', name: 'RubbishDispositionStep2', component: RubbishDispositionStep2},
        {path: 'serve/UrbanRoad/step1', name: 'UrbanRoadStep1', component: UrbanRoadStep1},
        {path: 'serve/UrbanRoad/step2', name: 'UrbanRoadStep2', component: UrbanRoadStep2},
        {path: 'serve/NewLandProject/step1', name: 'NewLandProjectStep1', component: NewLandProjectStep1},
        {path: 'serve/NewLandProject/step2', name: 'NewLandProjectStep2', component: NewLandProjectStep2},
        {path: 'serve/NewRentalProject/step1', name: 'NewRentalProjectStep1', component: NewRentalProjectStep1},
        {path: 'serve/NewRentalProject/step2', name: 'NewRentalProjectStep2', component: NewRentalProjectStep2},
      ]
    }
  ]
})
