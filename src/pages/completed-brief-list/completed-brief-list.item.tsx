import { List, Tag } from 'antd';

import DeleteCompletedBriefButton from './delete-completed-brief.button';
import DownloadCompletedBriefButton from './download-completed-brief.button';
import UpdateCompletedBriefButton from './update-completed-brief.button';
import { CompletedBrief } from '../../models/completed-brief';
import formatDate from '../../utils/format-date';

interface Props {
  item: CompletedBrief;
}

export default function CompletedBriefListItem({ item }: Props) {
  return (
    <List.Item
      actions={[
        <DownloadCompletedBriefButton id={item.id} />,
        <UpdateCompletedBriefButton id={item.id} />,
        <DeleteCompletedBriefButton item={item} />,
      ]}
    >
      <div>
        <Tag>{formatDate(item.dateCompleted)}</Tag>
        {item.brief.title}
      </div>
    </List.Item>
  );
}
