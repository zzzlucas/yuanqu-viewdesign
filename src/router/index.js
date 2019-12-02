import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout/index'
import HomeIndex from '@/pages/home/index'
import LoginIndex from '@/pages/login/index'
import ActivityIndex from '@/pages/activity/index'
import MessageIndex from '@/pages/message/index'
import RecruitmentIndex from '@/pages/message/RecruitmentIndex'
import PolicyIndex from '@/pages/policy/index'
import ActivityView from '@/pages/activity/view'
import TenementRepairsStep1 from '@/pages/serve/TenementRepairs/step1'
import TenementRepairsStep2 from '@/pages/serve/TenementRepairs/step2'
import TenementAppealStep1 from '@/pages/serve/TenementAppeal/step1'
import TenementAppealStep2 from '@/pages/serve/TenementAppeal/step2'
import DemandSubmissionStep1 from '@/pages/serve/DemandSubmission/step1'
import DemandSubmissionStep2 from '@/pages/serve/DemandSubmission/step2'
import ParkingApplyStep1 from '@/pages/serve/ParkingApply/step1'
import ParkingApplyStep2 from '@/pages/serve/ParkingApply/step2'
import ItRepairsStep1 from '@/pages/serve/ItRepairs/step1'
import ItRepairsStep2 from '@/pages/serve/ItRepairs/step2'
import AdvertisingApplyStep1 from '@/pages/serve/AdvertisingApply/step1'
import AdvertisingApplyStep2 from '@/pages/serve/AdvertisingApply/step2'
import PublicFacilitiesStep1 from '@/pages/serve/PublicFacilities/step1'
import PublicFacilitiesStep2 from '@/pages/serve/PublicFacilities/step2'
import EnterprisesRecordStep1 from '@/pages/serve/EnterprisesRecord/step1'
import EnterprisesRecordStep2 from '@/pages/serve/EnterprisesRecord/step2'
import RubbishDispositionStep1 from '@/pages/serve/RubbishDisposition/step1'
import RubbishDispositionStep2 from '@/pages/serve/RubbishDisposition/step2'
import UrbanRoadStep1 from '@/pages/serve/UrbanRoad/step1'
import UrbanRoadStep2 from '@/pages/serve/UrbanRoad/step2'
import NewLandProjectStep1 from '@/pages/serve/NewLandProject/step1'
import NewLandProjectStep2 from '@/pages/serve/NewLandProject/step2'
import NewRentalProjectStep1 from '@/pages/serve/NewRentalProject/step1'
import NewRentalProjectStep2 from '@/pages/serve/NewRentalProject/step2'

Vue.use(Router)

export default new Router({
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
