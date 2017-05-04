package com.howard.www.business.dao.impl;

import org.springframework.stereotype.Repository;

import com.howard.www.business.dao.ICustomerJurisdictionDao;
import com.howard.www.core.base.dao.impl.BaseDaoImpl;
import com.howard.www.core.data.transfer.dto.IDataTransferObject;

import net.sf.json.JSONArray;
/**
 * 
 * @ClassName:  CustomerJurisdictionDaoImpl   
 * @Description:TODO 获取管辖客户
 * @author: mayijie
 * @date:   2017年5月4日 下午4:57:48   
 *     
 * @Copyright: 2017 https://github.com/majieHoward Inc. All rights reserved.
 */
@Repository("customerJurisdictionDao")
public class CustomerJurisdictionDaoImpl extends BaseDaoImpl implements ICustomerJurisdictionDao {

	/**
	 * 
	 * <p>Title: obtainCustomerInformation</p>   
	 * <p>Description: 获取管辖客户列表</p>   
	 * @param queryParameters
	 * @return
	 * @throws Exception   
	 * @see com.howard.www.business.dao.ICustomerJurisdictionDao#obtainCustomerInformation(com.howard.www.core.data.transfer.dto.IDataTransferObject)
	 */
	public JSONArray obtainCustomerInformation(IDataTransferObject queryParameters) throws Exception {
		
		return null;
	}

}
