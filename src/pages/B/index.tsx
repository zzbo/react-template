import React, { FC } from 'react';
import './index.scss';

interface Props {
  match: {
    params: {
      time: string;
    }
  }
}

const B: FC<Props> = (props: Props) => {
  const { match: { params: { time } } } = props;

  return (
    <div className="main-b">
      <div className="content-b">
        page B
        <div>
          {`Time: ${new Date(Number(time)).toString()}`}
        </div>
      </div>
    </div>
  );
};

export default B;
