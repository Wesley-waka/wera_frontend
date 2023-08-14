import { companyAxios } from "../axios";

export const getRecruiterJobs = async (employer_id) => {
    return await companyAxios.get(`/jobs/employer/${employer_id}`)
}
