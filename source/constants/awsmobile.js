// AWS Mobile Hub Project Constants
const awsmobile = {
    'aws_app_analytics': 'enable',
    'aws_auth_facebook': 'enable',
    'aws_bots': 'enable',
    'aws_bots_config': [{"name":"BookTripMOBILEHUB","alias":"$LATEST","description":"Bot to make reservations for a visit to a city.","bot-template":"bot-trips","commands-help":["Book a car","Reserve a car","Make a car reservation","Book a hotel","Reserve a room","I want to make a hotel reservation"],"region":"us-east-1"}],
    'aws_cloud_logic': 'enable',
    'aws_cloud_logic_custom': [{"id":"2gvruxf7l4","name":"FetchLocations","description":"","endpoint":"https://2gvruxf7l4.execute-api.us-east-1.amazonaws.com/Development","region":"us-east-1","paths":["/items","/items/123"]}],
    'aws_cognito_identity_pool_id': 'us-east-1:73c36456-349d-4d31-928d-ae429e3d6967',
    'aws_cognito_region': 'us-east-1',
    'aws_facebook_app_id': '269060940446567',
    'aws_facebook_app_permissions': 'public_profile',
    'aws_mobile_analytics_app_id': 'fa1eb4ac0beb4ae0a8fda4a88882c1ae',
    'aws_mobile_analytics_app_region': 'us-east-1',
    'aws_project_id': 'a6937dd6-3575-402b-a582-d83829e48758',
    'aws_project_name': 'SoSrilanka',
    'aws_project_region': 'us-east-1',
    'aws_resource_bucket_name': 'sosrilanka-deployments-mobilehub-745525565',
    'aws_resource_name_prefix': 'sosrilanka-mobilehub-745525565',
    'aws_sign_in_enabled': 'enable',
    'aws_user_files': 'enable',
    'aws_user_files_s3_bucket': 'sosrilanka-userfiles-mobilehub-745525565',
    'aws_user_files_s3_bucket_region': 'us-east-1',
    'aws_user_pools': 'enable',
    'aws_user_pools_id': 'us-east-1_wDwkTHhxc',
    'aws_user_pools_mfa_type': 'OFF',
    'aws_user_pools_web_client_id': '55qlrrltr4s36cibv74tr545vp',
    "aws_appsync_graphqlEndpoint": "https://wcf6fidaqnccrlhnvio4gzubca.appsync-api.us-east-1.amazonaws.com/graphql",
    "aws_appsync_region":  "us-east-1",
    "aws_appsync_authenticationType": "API_KEY",
    "aws_appsync_apiKey":  "da2-mfvnahloz5dahn7fttokekxstq",
}

export default awsmobile;