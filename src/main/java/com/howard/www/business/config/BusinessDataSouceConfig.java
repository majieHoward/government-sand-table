package com.howard.www.business.config;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import com.alibaba.druid.pool.DruidDataSource;

@Configuration
@EnableTransactionManagement
public class BusinessDataSouceConfig {
	
	@Bean(name = "bussinessDataSource")
	public DruidDataSource initBusinessDruidDataSource() throws Exception {
		DruidDataSource bussinessDataSource = new DruidDataSource();
		bussinessDataSource.setUrl("jdbc:oracle:thin:@133.37.117.61:1521:comm");
		bussinessDataSource.setUsername("comm");
		bussinessDataSource.setPassword("123qaz");
		/* <property name="filters" value="stat" /> */
		bussinessDataSource.setFilters("stat");
		/* <property name="maxActive" value="20" /> */
		bussinessDataSource.setMaxActive(20);
		/* <property name="initialSize" value="1" /> */
		bussinessDataSource.setInitialSize(1);
		/* <property name="maxWait" value="60000" /> */
		bussinessDataSource.setMaxWait(60000);
		/* <property name="minIdle" value="1" /> */
		bussinessDataSource.setMinIdle(1);
		/* <property name="timeBetweenEvictionRunsMillis" value="3600000" /> */
		bussinessDataSource.setTimeBetweenEvictionRunsMillis(3600000);
		/* <property name="minEvictableIdleTimeMillis" value="3600000" /> */
		bussinessDataSource.setMinEvictableIdleTimeMillis(3600000);
		/* <property name="validationQuery" value="SELECT 'x'" /> */
		bussinessDataSource.setValidationQuery("SELECT 1 FROM DUAL");
		/* <property name="testWhileIdle" value="true" /> */
		bussinessDataSource.setTestWhileIdle(true);
		/* <property name="testOnBorrow" value="false" /> */
		bussinessDataSource.setTestOnBorrow(false);
		/* <property name="testOnReturn" value="false" /> */
		bussinessDataSource.setTestOnReturn(false);
		/* <property name="poolPreparedStatements" value="true" /> */
		bussinessDataSource.setPoolPreparedStatements(true);
		/*
		 * <property name="maxPoolPreparedStatementPerConnectionSize" value="50"
		 * />
		 */
		bussinessDataSource.setMaxPoolPreparedStatementPerConnectionSize(50);
		return bussinessDataSource;
	}
	
	@Bean(name = "bussinessJdbcTemplate")
	public NamedParameterJdbcTemplate initBusinessDruidJdbcTemplate(@Qualifier("bussinessDataSource") DruidDataSource druidDataSource) throws Exception {
		NamedParameterJdbcTemplate druidJdbcTemplate = new NamedParameterJdbcTemplate(druidDataSource);
		return druidJdbcTemplate;
	}
	
}
