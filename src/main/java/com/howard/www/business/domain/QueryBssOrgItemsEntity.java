package com.howard.www.business.domain;

import java.io.Serializable;
import java.util.Vector;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
@Data
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class QueryBssOrgItemsEntity implements Serializable{

	
	/**   
	 * @Fields serialVersionUID : TODO(用一句话描述这个变量表示什么)   
	 */  
	private static final long serialVersionUID = 1L;
	
	private String parent;
	
	private Vector<QueryBssOrgEntity> data=new Vector<QueryBssOrgEntity>();

    
}
