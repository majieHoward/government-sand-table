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

	@Override
	public JSONArray obtainQueryBssOrgTreeItems(IDataTransferObject queryParameters) throws Exception {
		return obtainQuery()
				.evaluetePrimitiveSqlResource(
						"SELECT A .BSS_ORG_ID, CASE WHEN ( SELECT  COUNT (1) FROM  bss_org b WHERE  b.state = '10A' AND b.up_bss_org_id = A .bss_org_id) > 0 THEN 'true' ELSE 'false' END is_parent, A .BSS_ORG_NAME FROM BSS_ORG A, BSS_ORG B, BSS_ORG_TYPE D, BSS_ORG_TYPE J, AREA_INFO E, REGION_INFO F, BSS_ORG_SORT G WHERE A .UP_BSS_ORG_ID = B.BSS_ORG_ID (+)AND B.BSS_ORG_TYPE_ID = J.BSS_ORG_TYPE_ID (+)AND A .REGION_ID = F.REGION_ID (+)AND A .BSS_ORG_TYPE_ID = D .BSS_ORG_TYPE_ID (+)AND A .AREA_ID = E .AREA_ID (+)AND A .BSS_ORG_SORT_ID = G .BSS_ORG_SORT_ID (+)AND A .state = '10A'AND A .up_bss_org_id = '${parent}' AND A .bss_org_type_id IN ( SELECT  bss_org_type_id FROM  mv_tree_gongzhong)ORDER BY A .area_id ASC, A .bss_org_name ASC")
				.evaluateJsonNamedParameterJdbcTemplate("bussinessJdbcTemplate")
				.evaluateIDataTransferObject(queryParameters).forJsonArray();
	}

}
