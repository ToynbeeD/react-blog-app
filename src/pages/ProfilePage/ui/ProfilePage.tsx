import { useParams } from 'react-router-dom';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { classNames } from '@/shared/lib';
import { Page } from '@/widgets/Page/Page';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props;
  const { id } = useParams<{id: string}>();

  return (
    <Page className={classNames('', {}, [className])}>
      <EditableProfileCard id={id!} />
    </Page>
  );
};

export default ProfilePage;
