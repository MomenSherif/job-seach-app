import SideBar from '@molecules/SideBar';
import { getJobRelatedJobs } from '@api/jobs';
import { useQuery } from '@hooks';
import ErrorFallback from '@molecules/ErrorFallback';

const JobSideBar: React.FC<{ jobID: string }> = ({ jobID }) => {
  const { loading, data, error, refetch } = useQuery(
    () => getJobRelatedJobs(jobID),
    // { enable: true },
    // [jobID], // * Related jobs doesn't change between similar jobs
  );

  if (error) return <ErrorFallback error={error!} onRetry={refetch} />;

  return (
    <SideBar
      list={data?.map((job) => ({
        label: job.title,
        to: `/jobs/${job.uuid}`,
      }))}
      loading={loading}
      title="Related Jobs"
    />
  );
};

export default JobSideBar;
