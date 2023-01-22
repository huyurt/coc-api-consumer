﻿import { COC_API_PATHS } from '../../utils/consts.util';
import CocApi from '../../configs/coc-api.config';

const GetClanInformation = async (clanTag: string) => {
  const response = await CocApi.get(`${COC_API_PATHS.Clans}/${encodeURIComponent(clanTag)}`);
  return response.data;
}

const CocService = {
  GetClanInformation
};

export default CocService;