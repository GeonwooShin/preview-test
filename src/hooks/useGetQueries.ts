import instance from '@apis/instance';
import { useSuspenseQuery } from '@tanstack/react-query';

export type RestDayProps = {
  dateKind: string;
  dateName: string;
  isHoliday: 'Y' | 'N';
  locdate: number;
  seq: number;
};

export const useRestDayInfo = (year: string) => {
  return useSuspenseQuery({
    queryKey: ['restDay', year],
    queryFn: async (): Promise<RestDayProps[]> => {
      const { data } = await instance.get('getRestDeInfo', {
        params: {
          solYear: year,
          ServiceKey:
            'vbdVUJI1hwCp2h0xCS8e1SJawvT7jGJKNMeUtDvBTGEWXgkZAEKFyd77HpGRX2Op4QaCn48JKs9O1DXES4NYKA==',
          _type: 'json',
          numOfRows: 20,
        },
      });
      return data.response.body.items.item;
    },
  });
};
