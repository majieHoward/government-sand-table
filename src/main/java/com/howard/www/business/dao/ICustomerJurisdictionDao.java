package com.howard.www.business.dao;

import com.howard.www.core.data.transfer.dto.IDataTransferObject;

import net.sf.json.JSONArray;

public interface ICustomerJurisdictionDao {
	public JSONArray obtainCustomerInformation(IDataTransferObject queryParameters) throws Exception;
}
