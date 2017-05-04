package com.howard.www.business.service;

import com.howard.www.core.data.transfer.dto.IDataTransferObject;

import net.sf.json.JSONArray;

public interface ICustomerJurisdictionService {
	public JSONArray obtainCustomerInformation(IDataTransferObject queryParameters)throws Exception;
}
