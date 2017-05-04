package com.howard.www.business.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.RestController;

import com.howard.www.business.service.ICustomerJurisdictionService;
import com.howard.www.core.base.web.controller.BaseController;

/**
 * 
 * @ClassName: CustomerJurisdictionController
 * @Description:TODO 管辖客户管理
 * @author: mayijie
 * @date: 2017年5月4日 下午4:31:30
 * 
 * @Copyright: 2017 https://github.com/majieHoward Inc. All rights reserved.
 */
@RestController
@Scope("prototype")
public class CustomerJurisdictionController extends BaseController {
	protected final Logger log = LoggerFactory.getLogger(ObtainUnprocessedOrderController.class);
	@Autowired
	private ApplicationContext cApplicationContext;
	
	private ICustomerJurisdictionService obtainICustomerJurisdictionService(String serviceName)throws Exception{
		return (ICustomerJurisdictionService) cApplicationContext.getBean(serviceName);
	}
	/**
	 * 
	 * @Title: obtainCustomerInformation   
	 * @Description: TODO 根据查询条件获取管辖客户信息 
	 * @param: @return
	 * @param: @throws Exception      
	 * @return: String      
	 * @throws
	 */
	public String obtainCustomerInformation() throws Exception{
		
		return null;
	}
}
