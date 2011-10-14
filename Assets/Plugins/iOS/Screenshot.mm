#import <Foundation/Foundation.h>
#import <AssetsLibrary/AssetsLibrary.h>

extern "C" void _ScreenshotWriteToAlbum(const char* path) {
    UIImage *image = [UIImage imageWithContentsOfFile:[NSString stringWithUTF8String:path]];

    ALAssetsLibrary *library = [[ALAssetsLibrary alloc] init];
    NSMutableDictionary *metadata = [[NSMutableDictionary alloc] init];
    
    [library writeImageToSavedPhotosAlbum:image.CGImage metadata:metadata completionBlock:^(NSURL *assetURL, NSError *error) {
        if (error) NSLog(@"Screenshot error - %@", error);
        [metadata release];
        [library release];
    }];
}
